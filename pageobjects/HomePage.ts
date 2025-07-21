import {Page} from "@playwright/test";

export class HomePage{

    constructor(private page:Page){}

    async searchProduct(product:string) {
        
        await this.page.fill('#gh-ac',product);
        await this.page.keyboard.press('Enter');
    }

    async searchForItem(product: string) {
    await this.page.fill('#gh-ac', product);
    await this.page.keyboard.press('Enter');
  }
    
    async clickSignIn(){

        await this.page.click("//a[contains(text(),'Sign in')]");
    }
}