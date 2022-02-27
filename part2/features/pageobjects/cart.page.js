import Page from './page';

class CartPage extends Page {
    get firstItemTitle() {return $('//*[@data-test="product-title"]');}
    get firstItemPrice() {return $('//*[@data-test="product-price"]');}
    get firstItemAmount() {return $('//*[@data-test="quantity-value"]');}

    async checkFirstItemDetails() {
        await expect(global.legoItem.name).toContain(await this.firstItemTitle.getText())     
        await expect(global.legoItem.price).toContain(await this.firstItemPrice.getText())    
        await expect(global.legoItem.amount).toContain(await this.firstItemAmount.getAttribute("value"))
    }
}

export default new CartPage()