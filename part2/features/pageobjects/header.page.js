import Page from './page';

class Header extends Page {
    get cartButton() {return $('//*[@data-test="util-bar-cart"]');}

    async clickCartButton() {
        await this.cartButton.click()
    }
}

export default new Header()