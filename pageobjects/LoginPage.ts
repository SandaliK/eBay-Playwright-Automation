
import { expect, Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async setupVirtualAuthenticator() {
    const client = await this.page.context().newCDPSession(this.page);
    await client.send('WebAuthn.enable');
    await client.send('WebAuthn.addVirtualAuthenticator', {
      options: {
        protocol: 'ctap2',
        transport: 'usb',
        hasResidentKey: false,
        hasUserVerification: false,
        isUserVerified: false,
      }
    });
  }

    async Login(username :string, password:string)
    {

        await this.page.waitForSelector('#userid',{state:'visible'});
        // Static wait added to avoid React re-rendering or hydration issues that can reset the input if .fill() is called too early.
        await this.page.waitForTimeout(3000);
        await this.page.fill('#userid',username);
        await this.page.locator('#signin-continue-btn').click();
        await this.page.waitForSelector('#pass', { state: 'visible' });
     
        await this.page.fill('#pass',password);
        await this.page.click('#sgnBt');


        await expect(this.page.locator('.gh-identity__greeting')).toBeVisible();
      
        
        

    }
}