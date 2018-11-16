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
const menu2_editclicked_PO_js_1 = require("./menu2.editclicked.PO.js");
const utility_js_1 = require("../Utils/utility.js");
var EC = protractor_1.protractor.ExpectedConditions;
let editclickobj = new menu2_editclicked_PO_js_1.editclick();
let utilobj = new utility_js_1.utlityconf();
class editEQdetail {
    constructor() {
        this.descriptionfieldid = locatordata.EditEQdetailed.Descriptionfieldid;
        this.leasemaxunitid = locatordata.EditEQdetailed.leasemaxunitsid;
        this.yesbuttoncss = locatordata.EditEQdetailed.yesbuttoncss;
        this.nobuttoncss = locatordata.EditEQdetailed.nobuttoncss;
        this.descriptionfield = protractor_1.element(protractor_1.by.id(this.descriptionfieldid));
        this.leasemaxunitsvalue = protractor_1.element(protractor_1.by.id(this.leasemaxunitid));
        this.yesbutton = protractor_1.element(protractor_1.by.css(this.yesbuttoncss));
        this.nobutton = protractor_1.element(protractor_1.by.css(this.nobuttoncss));
    }
    changedescriptionvalue(descval) {
        protractor_1.browser.wait(EC.presenceOf(this.descriptionfield), 50000);
        if (this.descriptionfield.isDisplayed() && this.descriptionfield.isEnabled()) {
            this.descriptionfield.clear();
            this.descriptionfield.sendKeys(descval);
            winstonlogger_1.CustomLogger.logger.info("The Descrption field value has been updated to " + descval);
        }
    }
    ;
    changeLeasemaxunits(leasemaxunitval) {
        if (this.leasemaxunitsvalue.isDisplayed() && this.leasemaxunitsvalue.isEnabled()) {
            this.leasemaxunitsvalue.clear();
            this.leasemaxunitsvalue.sendKeys(leasemaxunitval);
            winstonlogger_1.CustomLogger.logger.info("The lease max value field value has been updated to " + leasemaxunitval);
        }
    }
    ;
    enterconfirmResponse(response) {
        protractor_1.browser.wait(EC.presenceOf(this.yesbutton), 50000);
        if (response == 'Y' || response == 'y') {
            this.yesbutton.click();
        }
        else {
            this.nobutton.click();
        }
    }
    ;
    validatePlantEQedit() {
        protractor_1.browser.wait(EC.presenceOf(editclickobj.typecodefilter), 50000);
        utilobj.pressF3key();
        winstonlogger_1.CustomLogger.logger.info("The edit operation has been completed successfully");
    }
    ;
}
exports.editEQdetail = editEQdetail;
