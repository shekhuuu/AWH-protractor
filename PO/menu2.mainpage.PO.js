"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatordata = __importStar(require("../dataconfig/appLocators.json"));
const protractor_1 = require("protractor");
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
var EC = protractor_1.protractor.ExpectedConditions;
const maxtimeout = 600000;
class workplant_Displaypage {
    constructor() {
        //element locators
        this.WorkplantEQDropdowncss = locatordata.WorkplantEQ_display.regioncodedropdowncss;
        this.WorkplantEQDropdownoptioncss = locatordata.WorkplantEQ_display.selectregionDropdowncss;
        this.WorkplantEQContinuebuttoncss = locatordata.common.continuebuttoncss;
        this.WorkplantEQpagetwolinktxt = locatordata.WorkplantEQ_display.gridpagenotwolinktxt;
        ///page elements
        this.WorkplantEQregioncodeDropdown = protractor_1.element(protractor_1.by.css(this.WorkplantEQDropdowncss));
        this.WorkplantEQregioncodedrpOption = protractor_1.element.all(protractor_1.by.css(this.WorkplantEQDropdownoptioncss));
        this.WorkplantEQDisplayContinuebutton = protractor_1.element(protractor_1.by.css(this.WorkplantEQContinuebuttoncss));
        this.WorkplantEQpagetwolink = protractor_1.element(protractor_1.by.linkText(this.WorkplantEQpagetwolinktxt));
    }
    //public method to perform operations on page objects
    clickRegioncodeDrp() {
        this.WorkplantEQregioncodeDropdown.click();
    }
    ;
    selectRegionCode(regioncode) {
        this.clickRegioncodeDrp();
        this.WorkplantEQregioncodedrpOption.each(function (option) {
            option.getAttribute("ng-reflect-value").then(function (Actualregioncode) {
                if (regioncode == Actualregioncode) {
                    option.click();
                    winstonlogger_1.CustomLogger.logger.info("The Region code selected is " + Actualregioncode);
                }
            });
        });
    }
    ;
    clickcontinuebutton() {
        this.WorkplantEQDisplayContinuebutton.click();
    }
    ;
    checkgridload() {
        protractor_1.browser.wait(EC.visibilityOf(this.WorkplantEQpagetwolink), maxtimeout);
        winstonlogger_1.CustomLogger.logger.info("The main page grid has been loaded");
    }
    ;
}
exports.workplant_Displaypage = workplant_Displaypage;
