"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
const locatordata = __importStar(require("../dataConfig/appLocators.json"));
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
var EC = ptor_1.protractor.ExpectedConditions;
class menu3main {
    constructor() {
        //page locators
        this.readingdatecssval = locatordata.BuildEQ_mainpage.readingdatecss;
        this.centercodename = locatordata.BuildEQ_mainpage.centrecodename;
        this.paragraphtextcss = locatordata.BuildEQ_mainpage.paratextcss;
        this.yesbuttoncss = locatordata.BuildEQ_mainpage.Yesbuttoncss;
        this.nobuttoncss = locatordata.BuildEQ_mainpage.Nobuttoncss;
        this.dateErrorcss = locatordata.BuildEQ_mainpage.WrongDatemsgcss;
        this.Errorcss = locatordata.BuildEQ_mainpage.Errormsgcss;
        //page elements
        this.readingdate = protractor_1.element(protractor_1.by.css(this.readingdatecssval));
        this.centercode = protractor_1.element(protractor_1.by.name(this.centercodename));
        this.paratext = protractor_1.element(protractor_1.by.css(this.paragraphtextcss));
        this.Yesbutton = protractor_1.element(protractor_1.by.css(this.yesbuttoncss));
        this.Nobutton = protractor_1.element(protractor_1.by.css(this.nobuttoncss));
        this.dateError = protractor_1.element(protractor_1.by.css(this.dateErrorcss));
        this.Errormsg = protractor_1.element(protractor_1.by.css(this.Errorcss));
    }
    enterReadingDate(reading) {
        if (this.readingdate.isDisplayed() && this.readingdate.isEnabled()) {
            this.readingdate.clear();
            this.readingdate.sendKeys(reading);
            winstonlogger_1.CustomLogger.logger.info("The entered Reading date is " + reading);
        }
    }
    ;
    entercentercode(ccode) {
        if (this.centercode.isDisplayed() && this.centercode.isEnabled()) {
            this.centercode.clear();
            this.centercode.sendKeys(ccode);
            winstonlogger_1.CustomLogger.logger.info("The entered center code is " + ccode);
        }
    }
    ;
    verifyprinterText() {
        if (this.paratext.isDisplayed() && this.paratext.isEnabled()) {
            winstonlogger_1.CustomLogger.logger.info("The paragraph text on menu three main page has been validated");
        }
    }
    ;
    enterconfirmresponse(response) {
        protractor_1.browser.wait(EC.presenceOf(this.Yesbutton), 50000);
        if (response == 'Y' || response == 'y') {
            if (this.Yesbutton.isEnabled()) {
                this.Yesbutton.click();
            }
        }
        else {
            if (this.Nobutton.isEnabled()) {
                this.Nobutton.click();
            }
        }
    }
    ;
    validateDaterror(Errormsg) {
        if (this.dateError.isDisplayed()) {
            this.dateError.getText().then(function (text) {
                expect(text).toContain(Errormsg);
            });
        }
        winstonlogger_1.CustomLogger.logger.info("Date Error message " + Errormsg + " has been validated successfully");
    }
    ;
    validateErrormesage(vmsg) {
        if (this.Errormsg.isSelected()) {
            this.Errormsg.getText().then(function (text) {
                expect(text).toContain(vmsg);
            });
        }
        winstonlogger_1.CustomLogger.logger.info("Validation Error message " + vmsg + " has been validated successfully");
    }
    ;
}
exports.menu3main = menu3main;
