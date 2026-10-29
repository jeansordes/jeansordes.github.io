// PLAYWRIGHT_MODULE=/path/to/playwright node tests/language.cjs
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const base = process.env.SITE_URL || 'http://127.0.0.1:4178';
(async () => {
  const browser = await chromium.launch({headless: true});
  const errors = [];
  async function context(options = {}, languages) {
    const ctx = await browser.newContext(options);
    if (languages) await ctx.addInitScript(langs => Object.defineProperty(navigator, 'languages', {get: () => langs}), languages);
    ctx.on('page', p => p.on('pageerror', e => errors.push(e.message)));
    return ctx;
  }
  try {
    for (const [languages, expected] of [[['fr-FR'], 'fr'], [['fr-CA'], 'fr'], [['en-GB', 'fr'], 'en'], [['de', 'fr-BE', 'en'], 'fr'], [['ja'], 'en'], [[], 'en']]) {
      const ctx = await context({}, languages);
      const page = await ctx.newPage();
      await page.goto(base + '/?campaign=test#portfolio');
      await page.waitForURL(`**/${expected}/?campaign=test#portfolio`);
      assert.equal(await page.locator('html').getAttribute('lang'), expected);
      await page.locator('.language-dropdown > summary').click();
      assert.equal(await page.locator('.language-options a:visible').count(), 2);
      assert.equal(await page.locator('[data-browser-default]').getAttribute('data-language'), expected);
      assert.match(await page.locator('[data-browser-default]').textContent(), expected === 'fr' ? /Français.*Langue du navigateur/ : /English.*Browser default/);
      assert.equal(await page.evaluate(() => localStorage.getItem('jzs.language')), null);

      await ctx.close();
    }
    const ctx = await context({locale: 'fr-FR', reducedMotion: 'reduce'});
    const page = await ctx.newPage();
    await page.goto(base + '/en/'); // Explicit URL wins over browser preference.
    assert.equal(await page.locator('html').getAttribute('lang'), 'en');
    assert.match(await page.locator('h1').textContent(), /experienced developer/);
    const toggle = page.locator('.language-dropdown > summary');
    assert.equal((await toggle.innerText()).trim(), 'EN');
    assert.ok(await page.locator('[data-language="fr"]').isHidden());
    await toggle.focus();
    await page.keyboard.press('Enter');
    assert.ok(await page.locator('[data-language="fr"]').isVisible());
    await page.keyboard.press('Tab');
    await page.keyboard.press('Escape');
    assert.ok(await toggle.evaluate(el => el === document.activeElement));
    assert.ok(await page.locator('[data-language="fr"]').isHidden());
    await toggle.click();
    await page.locator('h1').click();
    assert.ok(await page.locator('[data-language="fr"]').isHidden());

    await page.locator('.language-dropdown > summary').click();
    await page.locator('[data-language="fr"]').click();
    await page.waitForURL('**/fr/');
    assert.equal(await page.evaluate(() => localStorage.getItem('jzs.language')), null);
    await page.goto(base + '/projets/');
    await page.waitForURL('**/fr/projets/');
    await page.locator('.language-dropdown > summary').click();
    await page.locator('[data-language="en"]').click();
    await page.waitForURL('**/en/projets/');
    await page.goto(base + '/');
    await page.waitForURL('**/en/');
    await page.locator('.language-dropdown > summary').click();
    await page.locator('[data-browser-default]').click();
    await page.waitForURL('**/fr/');
    assert.equal(await page.evaluate(() => localStorage.getItem('jzs.language')), null);
    for (const lang of ['fr', 'en']) {
      for (const route of ['', 'projets/']) {
        for (const width of [320, 390, 768, 1440]) {
          await page.setViewportSize({width, height: 900});
          await page.goto(`${base}/${lang}/${route}`);
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow ${lang}/${route} at ${width}`);
          assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), `https://www.jzs.fr/${lang}/${route}`);
          assert.equal(await page.locator('link[hreflang]').count(), 3);
          assert.ok(await page.locator('img:not([loading="lazy"])').evaluateAll(imgs => imgs.every(i => i.complete && i.naturalWidth)));
        }
      }
      await page.goto(`${base}/${lang}/projets/`);
      await page.locator('[data-category-filter="Obsidian"]').click();
      await page.locator('#project-search').fill(lang === 'en' ? 'reusable' : 'reutilisables');
      assert.equal(await page.locator('[data-project]:visible').count(), 1);
      assert.equal(await page.locator('#result-count').textContent(), lang === 'en' ? '1 project to explore' : '1 projet à explorer');
      await page.locator('#project-search').fill('zzzzzz');
      assert.ok(await page.locator('.empty-results').isVisible());
      await page.locator('.empty-results [data-reset]').click();
      assert.equal(await page.locator('[data-project]:visible').count(), 8);
      await page.goto(`${base}/${lang}/`);
      await page.locator('[data-project-next]').click();
      assert.match(await page.locator('[data-project-counter]').textContent(), lang === 'en' ? /Project 2 of 3/ : /Projet 2 sur 3/);
      await page.locator('[data-video-play]').first().click();
      assert.ok(await page.locator('[data-video-dialog]').isVisible());
      assert.match(await page.locator('[data-video-player] iframe').getAttribute('title'), lang === 'en' ? /Don’t confuse/ : /Ne pas confondre/);
      await page.keyboard.press('Escape');
    }
    await page.goto(base + '/en/');
    await page.setViewportSize({width: 390, height: 850});
    await page.screenshot({path: '/tmp/jzs-i18n-en-mobile.png'});
    const blocked = await context({locale: 'fr-CA'});
    await blocked.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {get() {throw new Error('Storage disabled');}});
    });
    const blockedPage = await blocked.newPage();
    await blockedPage.goto(base + '/');
    await blockedPage.waitForURL('**/fr/');
    await blockedPage.locator('.language-dropdown > summary').click();
    await blockedPage.locator('[data-language="en"]').click();
    await blockedPage.waitForURL('**/en/');
    await blockedPage.getByRole('link', {name: 'Explore all my projects', exact: true}).click();
    await blockedPage.waitForURL('**/en/projets/');
    await blocked.close();
    const nojs = await context({javaScriptEnabled: false});
    const staticPage = await nojs.newPage();
    await staticPage.goto(base + '/');
    assert.equal(await staticPage.locator('html').getAttribute('lang'), 'en');
    await staticPage.locator('.language-dropdown > summary').click();
    await staticPage.locator('[data-language="fr"]').click();
    assert.equal(await staticPage.locator('html').getAttribute('lang'), 'fr');
    await staticPage.goto(base + '/en/projets/');
    assert.equal(await staticPage.locator('[data-project]:visible').count(), 8);
    assert.ok(await staticPage.locator('.catalog-controls').isHidden());
    await nojs.close();
    assert.deepEqual(errors, []);
    console.log('PASS: preferred languages, regional variants, fallback, explicit URLs, persistence, reset, disabled storage, no JS, metadata, filters, carousel, video and 4 viewport widths in both languages.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exit(1); });
