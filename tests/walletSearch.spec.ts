import {test,expect} from '@playwright/test';
import {LoginPage} from '../pageobjects/LoginPage';
import { HomePage } from '../pageobjects/HomePage';

test('Login to the page and search product', async({page})=>
{

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await loginPage.setupVirtualAuthenticator();

    await page.waitForLoadState('load');
    await page.goto("https://www.ebay.com");
  
    await homePage.clickSignIn();
  
   await loginPage.Login('s94084765@gmail.com','Admin@1234');
   await homePage.searchForItem('wallet');
   await expect(page.locator('(//span[contains(text(),"wallet")])[1]')).toBeVisible();
   

});
