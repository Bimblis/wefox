import { Given, When, Then } from '@wdio/cucumber-framework';

import shopData from '../data/shopData.json'
import shopPage from '../pageobjects/shop.page';
import LegoHomePage from '../pageobjects/legoHome.page';
import Page from '../pageobjects/page';
import itemDetailPage from '../pageobjects/itemDetail.page';
import headerPage from '../pageobjects/header.page';
import cartPage from '../pageobjects/cart.page';


const pages = {
    legoHome: LegoHomePage
}

var page = new Page() 

Given(/^I am on the "(.*?)" page with '(.*?)'$/, async (page, language) => {
    if (!shopData['languages'].includes(language)) 
        throw `Inexistent language! ${language}`

    await pages[page].open(language)
});

When(/^I go to the store$/, async () => {
    await page.chooseShop()
});

When(/^I accept cookies$/, async () => {
    await page.acceptAllCookies()
});

When(/^I select "(.*?)" shop category$/, async (category) => {
    if (!shopData['categories'].includes(category)) 
        throw `Inexistent category! ${category}`
    await LegoHomePage.enterShopCategory(category)
});

When(/^I filter by age of "(.*?)"$/, async (age) => {
    if (!shopData['ages'].includes(age)) 
        throw `age is not valid! ${age}`
    await shopPage.selectAgeFilter(age)
});

When(/^I filter by price of "(.*?)"$/, async (price) => {
    if (!shopData['prices'].includes(price)) 
        throw `price is not valid! ${price}`
    await shopPage.selectPriceFilter(price)
});

Then(/^I check the number of displayed items is 18$/, async () => {
    await shopPage.countDisplayedItems(18)
});

When(/^I select the first item$/, async () => {
    await shopPage.clickFirstItemInResults()
});

When(/^I add "(.*?)" item to the bag$/, async (amountItems) => {
    if (isNaN(amountItems))
        throw `amountItems is not a number! ${amountItems}`
    await itemDetailPage.setItemQuantity(amountItems)
    await itemDetailPage.storeItemData()
    await itemDetailPage.addToBagItem()
    await itemDetailPage.continueShopping()
});

When(/^I navigate to the bag$/, async () => {
    await headerPage.clickCartButton()
});

Then(/^I check the item data is correct$/, async () => {
    await cartPage.checkFirstItemDetails()
});