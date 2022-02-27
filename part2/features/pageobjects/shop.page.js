import Page from './page';

class ShopPage extends Page {
    get shopNewItemsButton() {return $('button[data-test=quicklink-link-0]');}
    get filterAgeTo4CheckBox() {return $(`(//*[@data-test="product-facet-ageRange-accordion-content-child"]//*[@data-test="checkbox-label"])[2]`);}
    get filterPriceTo25CheckBox() {return $(`(//*[@data-test="product-facet-prices-accordion-content-child"]//*[@data-test="checkbox-label"])[1]`);}
    get listDisplayedItems() {return $$(`//*[@data-test="product-item"]`)}
    get firstListItem() {return $(`(//*[@data-test="product-item"])[1]`)}

    async clickFirstItemInResults() {
        await this.firstListItem.scrollIntoView()
        await this.firstListItem.click()
    }

    async countDisplayedItems(amount) {
        await expect(this.listDisplayedItems).toBeElementsArrayOfSize(amount)
    }

    async clickNewItemsShop() {
        await this.shopNewItemsButton.click()
    }

    async selectAgeFilter(age) {
        switch (age) {
            case "4+":
                await this.filterAgeTo4CheckBox.click()
                break;
            default:
                throw `Incorrect age selected! ${age}`
                break;
        }
    }

    async selectPriceFilter(age) {
        switch (age) {
            case "0-25":
                await this.filterPriceTo25CheckBox.click()
                break;
            default:
                throw `Incorrect price selected! ${age}`
                break;
        }
    }
    
    open() {
        return super.open('categories/new-sets-and-products');
    }
}

export default new ShopPage();
