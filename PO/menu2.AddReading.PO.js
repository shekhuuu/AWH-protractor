"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatordata = __importStar(require("../dataConfig/appLocators.json"));
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
const utility_js_1 = require("../Utils/utility.js");
var EC = ptor_1.protractor.ExpectedConditions;
let utilobj = new utility_js_1.utlityconf();
class workplant_addreading {
    constructor() {
        //locators from json file
        this.typecodefiltercss = locatordata.workplantEQ_AddReading.typecodefiltercss;
        this.elementradiobtncss = locatordata.workplantEQ_AddReading.elementradiobtncss;
        this.addReadingbtntxt = locatordata.workplantEQ_AddReading.Add_readingBtntxt;
        this.readingtypedropdownid = locatordata.workplantEQ_AddReading.Readingtypedrpid;
        this.Readingdropoptionscss = locatordata.workplantEQ_AddReading.Readingtypeoptioncss;
        this.Readingvalueid = locatordata.workplantEQ_AddReading.readingvalueid;
        this.Continuebtncss = locatordata.common.continuebuttoncss;
        this.ConfirmYesbutton = locatordata.workplantEQ_AddReading.Yesbuttoncss;
        this.ConfirmNobutton = locatordata.workplantEQ_AddReading.Nobuttoncss;
        //elements of the page
        this.typecodefield = protractor_1.element(protractor_1.by.css(this.typecodefiltercss));
        this.elementradiobtn = protractor_1.element(protractor_1.by.css((this.elementradiobtncss)));
        this.addreadingbtn = protractor_1.element.all(protractor_1.by.buttonText(this.addReadingbtntxt));
        this.readingtypedrp = protractor_1.element(protractor_1.by.id(this.readingtypedropdownid));
        this.readingtypeDrpoption = protractor_1.element.all(protractor_1.by.css(this.Readingdropoptionscss));
        this.Readingvalue = protractor_1.element(protractor_1.by.id(this.Readingvalueid));
        this.Continuebtn = protractor_1.element(protractor_1.by.css(this.Continuebtncss));
        this.Yesbutton = protractor_1.element(protractor_1.by.css(this.ConfirmYesbutton));
        this.Nobutton = protractor_1.element(protractor_1.by.css(this.ConfirmNobutton));
    }
    //public methods
    enterEquipmentcode(eqcode) {
        if (this.typecodefield.isDisplayed() && this.typecodefield.isEnabled()) {
            this.typecodefield.sendKeys(eqcode);
        }
        winstonlogger_1.CustomLogger.logger.info("The EQ code value entered is" + eqcode);
    }
    ;
    clickAddreadingcode() {
        if (this.elementradiobtn.isDisplayed()) {
            this.elementradiobtn.click();
        }
    }
    pressAddreadingbtn() {
        if (this.addreadingbtn.isDisplayed() && this.addreadingbtn.isEnabled()) {
            this.addreadingbtn.click();
        }
        winstonlogger_1.CustomLogger.logger.info("Add Reading button has been pressed successfully");
    }
    ;
    selectReadingtype(type) {
        protractor_1.browser.wait(EC.presenceOf(this.readingtypedrp), 50000);
        this.readingtypedrp.click();
        this.readingtypeDrpoption.each(function (option) {
            option.getAttribute("ng-reflect-value").then(function (value) {
                if (value == type) {
                    option.click();
                }
            });
        });
        winstonlogger_1.CustomLogger.logger.info("The selected option code for reading type is " + type);
    }
    ;
    enterReadingvalue(value) {
        if (this.Readingvalue.isDisplayed()) {
            this.Readingvalue.sendKeys(value);
        }
        winstonlogger_1.CustomLogger.logger.info("the entered value of reading value is " + value);
    }
    ;
    selectconfirmResponse(response) {
        utilobj.pressEnterKey();
        protractor_1.browser.wait(EC.presenceOf(this.Yesbutton), 50000);
        if (response == 'Y' || response == 'y') {
            if (this.Yesbutton.isDisplayed()) {
                this.Yesbutton.click();
            }
        }
        else {
            if (this.Nobutton.isDisplayed()) {
                this.Nobutton.click();
            }
        }
    }
    ;
    validateAddreading() {
        protractor_1.browser.wait(EC.visibilityOf(this.Continuebtn), 50000);
        winstonlogger_1.CustomLogger.logger.info("Add reading operation has been completed successfully");
        utilobj.pressF3key();
    }
    ;
}
exports.workplant_addreading = workplant_addreading;
