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
var EC = protractor_1.protractor.ExpectedConditions;
class editclick {
    constructor() {
        this.typecodefiltercss = locatordata.WorkplantEQ_EditEQcode.filtertypecodecss;
        this.radiobuttoncss = locatordata.WorkplantEQ_EditEQcode.elementRadiobutton;
        this.editbtntext = locatordata.WorkplantEQ_EditEQcode.editbuttontxt;
        this.typecodefilter = protractor_1.element(protractor_1.by.css(this.typecodefiltercss));
        this.editbutton = protractor_1.element(protractor_1.by.buttonText(this.editbtntext));
        this.eleradiobutton = protractor_1.element(protractor_1.by.css(this.radiobuttoncss));
    }
    enterfiltercode(code) {
        this.typecodefilter.sendKeys(code);
        winstonlogger_1.CustomLogger.logger.info("The entered EQ code for editing is " + code);
    }
    ;
    selectelement() {
        if (this.eleradiobutton.isDisplayed() && this.eleradiobutton.isEnabled()) {
            this.eleradiobutton.click();
        }
    }
    ;
    presseditbutton() {
        protractor_1.browser.wait(EC.presenceOf(this.editbutton), 50000);
        if (this.editbutton.isDisplayed() && this.editbutton.isEnabled()) {
            this.editbutton.click();
            winstonlogger_1.CustomLogger.logger.info("Edit plant EQ button pressed successfully");
        }
    }
    ;
}
exports.editclick = editclick;
