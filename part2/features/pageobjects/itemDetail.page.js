import ItemData from '../data/itemData';
import Page from './page';

class ItemDetailPage extends Page {
    get newItemsCategoryButton() {return $('//*[@data-test="add-to-bag"]');}
    get itemName() {return $('//*[@data-test="product-overview-name"]//span');}
    get itemPrice() { return $('//*[@data-test="product-price"]');}
    get itemAmount() { return $('//*[@data-test="product-overview-quantity"]')}
    get inputItemAmount() { return $('//*[@data-test="product-overview-quantity"]')}
    get continueShoppingButton() { return $('//*[@data-test="continue-shopping-button"]')}

    async continueShopping() {
        await this.continueShoppingButton.click()
    }

    async addToBagItem() {
        await this.newItemsCategoryButton.click()
    }

    async setItemQuantity(amount) {
        await this.inputItemAmount.setValue(amount)
    }

    async storeItemData() {
        await this.itemName.waitForDisplayed()
        global.legoItem = new ItemData (
            await this.itemName.getText(),
            await this.itemPrice.getText(),
            await this.itemAmount.getAttribute('value')
        )
    }
}

export default new ItemDetailPage();
