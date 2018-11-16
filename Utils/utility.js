"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const locatordata = __importStar(require("../dataconfig/appLocators.json"));
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
class utlityconf {
    constructor() {
        //element locators  
        this.EQmenucss = locatordata.mainpage.EQmenucss;
        this.EQmenuheadingcss = locatordata.common.pageheadingcss;
        this.EQmenutwocss = locatordata.menupage.Menutwolinkcss;
        this.ScreenNamecss = locatordata.common.screenNamecss;
        this.EQmenuthreecss = locatordata.menupage.Menuthreelinkcss;
        //page elements
        this.EQmenulink = protractor_1.element(protractor_1.by.css(this.EQmenucss));
        this.EQmenuheading = protractor_1.element(protractor_1.by.css(this.EQmenuheadingcss));
        this.EQmenutwolink = protractor_1.element(protractor_1.by.css(this.EQmenutwocss));
        this.ScreenName = protractor_1.element(protractor_1.by.css(this.ScreenNamecss));
        this.EQmenuthreelink = protractor_1.element(protractor_1.by.css(this.EQmenuthreecss));
    }
    //common function to be used for all add/edit/display etc
    launchurl(url) {
        protractor_1.browser.get(url);
    }
    ;
    //public methods to perform operations on page objects
    verifyMainpagetitle(expectedtitle) {
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toContain(expectedtitle);
            winstonlogger_1.CustomLogger.logger.info("The title of main page which is verified is " + expectedtitle);
        });
    }
    ;
    clickEQmenu() {
        if (this.EQmenulink.isDisplayed() && this.EQmenulink.isEnabled()) {
            this.EQmenulink.click();
        }
    }
    ;
    verifyPageheading(expectedheadingtxt) {
        this.EQmenuheading.getText().then(function (actualheadingtext) {
            expect(actualheadingtext).toBe(expectedheadingtxt);
            winstonlogger_1.CustomLogger.logger.info("The heading verified on page is " + expectedheadingtxt);
        });
    }
    ;
    VerifyScreenName(expectedscreenName) {
        this.ScreenName.getText().then(function (actualscreenName) {
            expect(expectedscreenName).toContain(actualscreenName);
            winstonlogger_1.CustomLogger.logger.info("The screen name verified is " + expectedscreenName);
        });
    }
    clickEQmenutwolink() {
        if (this.EQmenutwolink.isDisplayed() && this.EQmenutwolink.isEnabled()) {
            this.EQmenutwolink.click();
            winstonlogger_1.CustomLogger.logger.info("Menu option 2 clicked");
        }
    }
    ;
    clickEQmenuthreelink() {
        if (this.EQmenuthreelink.isDisplayed() && this.EQmenuthreelink.isEnabled()) {
            this.EQmenuthreelink.click();
            winstonlogger_1.CustomLogger.logger.info("Menu option 3 clicked");
        }
    }
    ;
    pressF6key() {
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.F6).perform();
    }
    ;
    pressEnterKey() {
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
    }
    ;
    pressF3key() {
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.F3).perform();
    }
    ;
}
exports.utlityconf = utlityconf;
