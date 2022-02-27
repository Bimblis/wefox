import Page from './page';

class LegoHomePage extends Page {
    get newItemsCategoryButton() {return $('a[data-test=quicklink-link-0]');}
    get exclusiveItemsCategoryButton() {return $('a[data-test=quicklink-link-1]');}
    get offersItemsCategoryButton() {return $('a[data-test=quicklink-link-2]');}

    async enterShopCategory(category){
        switch (category) {
            case "newItems":
                await this.newItemsCategoryButton.click()
                break;
            case "exclusiveItems":
                await this.exclusiveItemsCategoryButton.click()
                break;
            case "offerItems":
                await this.offersItemsCategoryButton.click()
                break;
            default:
                throw `Inexistent category! ${category}`;
        }
    }

    open(language) {
        return super.open(language, '');
    }
}

export default new LegoHomePage();
