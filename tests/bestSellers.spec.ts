
import { test, expect } from '@playwright/test';
import { HomePage } from '../pageobjects/HomePage';
import { LoginPage } from '../pageobjects/LoginPage';
import { ProductPage } from '../pageobjects/ProductPage';

test('Login and validate best seller related products', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);


  await loginPage.setupVirtualAuthenticator();

  await page.waitForLoadState('load');
  await page.goto("https://www.ebay.com");

  await homePage.clickSignIn();

  await loginPage.Login('s94084765@gmail.com', 'Admin@1234');
  await homePage.searchForItem('wallet');
  await expect(page.locator('(//span[contains(text(),"wallet")])[1]')).toBeVisible();
  console.log(await page.locator('(//span[contains(text(),"wallet")])[1]').textContent());
  
  //await page.waitForLoadState('load');
  const firstResult = page.locator('div.s-item__title').nth(2);
  await firstResult.click();

  const [newPage] = await Promise.all([
    page.context().waitForEvent('page')
  
  ]);

  await newPage.waitForLoadState();

  const productPage = new ProductPage(newPage);
  await productPage.validateMainProductElements();
  await productPage.scrollToBestSellers();
  await productPage.validateBestSellerSection();
});