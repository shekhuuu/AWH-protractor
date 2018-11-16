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
class displayplantEQ {
    constructor() {
        this.typecodeFilterfieldcss = locatordata.WorkplantEQ_DisplayEQ.typecodefiltercss;
        this.elementradiobtncss = locatordata.WorkplantEQ_DisplayEQ.elementradiobtncss;
        this.displaybtntext = locatordata.WorkplantEQ_DisplayEQ.displaybtntext;
        this.screenNamecss = locatordata.common.screenNamecss;
        this.typecodefilter = protractor_1.element(protractor_1.by.css(this.typecodeFilterfieldcss));
        this.elementradiobtn = protractor_1.element(protractor_1.by.css(this.elementradiobtncss));
        this.displaybtn = protractor_1.element(protractor_1.by.buttonText(this.displaybtntext));
        this.screenName = protractor_1.element(protractor_1.by.css(this.screenNamecss));
        //table.ui-table-scrollable-body-table tbody tr td:nth-child(5)>p-celleditor>div-css for value in reading value column
    }
    enterEQcode(code) {
        if (this.typecodefilter.isDisplayed()) {
            this.typecodefilter.sendKeys(code);
        }
        winstonlogger_1.CustomLogger.logger.info("The code entered for display reading " + code);
    }
    ;
    clickElementradiobtn() {
        if (this.elementradiobtn.isDisplayed()) {
            this.elementradiobtn.click();
        }
    }
    ;
    pressdisplaybutton() {
        if (this.displaybtn.isDisplayed() && this.displaybtn.isEnabled()) {
            this.displaybtn.click();
        }
        winstonlogger_1.CustomLogger.logger.info("Display plant EQ button has been pressed successfully");
        protractor_1.browser.wait(EC.presenceOf(this.screenName), 50000);
        if (this.screenName.isDisplayed()) {
            winstonlogger_1.CustomLogger.logger.info("Display operation has been completed successfully");
        }
    }
    ;
}
exports.displayplantEQ = displayplantEQ;
