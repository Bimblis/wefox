export default class Page {
    get gotoLegoHomeButton() {return $('button[data-test=age-gate-grown-up-cta]');}
    get acceptAllCookiesButton() {return $('button[data-test=cookie-accept-all]');}

    open(language, path) {
        return browser.url(`https://www.lego.com/${language}/${path}`)
    }

    async chooseShop () {
        await this.gotoLegoHomeButton.waitForDisplayed()
        await this.gotoLegoHomeButton.click();
    }

    async acceptAllCookies() {
        await this.acceptAllCookiesButton.waitForDisplayed()
        await this.acceptAllCookiesButton.click();
    }
}

