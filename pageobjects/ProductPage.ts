
import { Page, expect } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) { }

  async validateMainProductElements() {
    await expect(this.page.locator('.x-item-title__mainTitle').first()).toBeVisible();
    console.log(await this.page.locator('.x-item-title__mainTitle').first().textContent());
    await expect(this.page.locator('div.x-price-primary span')).toBeVisible();
    console.log(await this.page.locator('div.x-price-primary span').textContent());
  }

  async scrollToBestSellers() {

    //await this.page.mouse.wheel(0, 1000);

    await this.page.locator('.Yp4b').first().hover();

    const headingLocator = this.page.locator('.Yp4b'); 

    const headingText = await headingLocator.first().textContent();

    if (headingText?.includes("Similar items"))  {
      console.log("Valid heading found:", headingText);
    } else {
      throw new Error("Expected heading not found. Got: " + headingText);
    }

  }

  async validateBestSellerSection() {

    await this.page.locator('.carousel__list').first().hover();
    const products = this.page.locator('.carousel__list').first();
    const count = await products.count();

    console.log('Best Seller product count:', count);

    await expect(count).toBeGreaterThan(0);
    await expect(count).toBeLessThanOrEqual(6);
  }
}