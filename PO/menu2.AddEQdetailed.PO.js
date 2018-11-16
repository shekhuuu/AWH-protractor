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
const protractor_1 = require("protractor");
const utility_js_1 = require("../Utils/utility.js");
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
const menu2_AddEQcode_PO_js_1 = require("./menu2.AddEQcode.PO.js");
var EC = protractor_1.protractor.ExpectedConditions;
let addobj = new menu2_AddEQcode_PO_js_1.AddEQcode();
let utilobj = new utility_js_1.utlityconf();
class addEQdetail {
    constructor() {
        //element locators
        this.Typecodecss = locatordata.AddEQdetail.typecodecss;
        this.Centercss = locatordata.AddEQdetail.centercss;
        this.EQleasorcss = locatordata.AddEQdetail.EQleasorcss;
        this.filterbuttoncss = locatordata.AddEQdetail.Filterbuttoncss;
        this.orgnamecss = locatordata.AddEQdetail.orgnamecss;
        this.leasorradiobtncss = locatordata.AddEQdetail.leasorradiobtncss;
        this.Segmentdropdowncss = locatordata.AddEQdetail.Segmentdrpcss;
        this.Segmentdrpoptioncss = locatordata.AddEQdetail.Segmentdrpoptioncss;
        this.Descriptioncss = locatordata.AddEQdetail.Descriptiontxtcss;
        this.Readingdatecss = locatordata.AddEQdetail.Readingdatecss;
        this.confirmbuttoncss = locatordata.AddEQdetail.yesbuttoncss;
        this.rejectbuttoncss = locatordata.AddEQdetail.nobuttoncss;
        //page elements
        this.Typecode = protractor_1.element(protractor_1.by.css(this.Typecodecss));
        this.Center = protractor_1.element(protractor_1.by.css(this.Centercss));
        this.EQleasor = protractor_1.element(protractor_1.by.css(this.EQleasorcss));
        this.filterbutton = protractor_1.element(protractor_1.by.css(this.filterbuttoncss));
        this.orgname = protractor_1.element(protractor_1.by.css(this.orgnamecss));
        this.leasorbtns = protractor_1.element.all(protractor_1.by.css(this.leasorradiobtncss));
        this.segmentdropdown = protractor_1.element(protractor_1.by.css(this.Segmentdropdowncss));
        this.segmentoptions = protractor_1.element.all(protractor_1.by.css(this.Segmentdrpoptioncss));
        this.descriptiontxt = protractor_1.element(protractor_1.by.css(this.Descriptioncss));
        this.Readingdate = protractor_1.element(protractor_1.by.css(this.Readingdatecss));
        this.yesbutton = protractor_1.element(protractor_1.by.css(this.confirmbuttoncss));
        this.nobutton = protractor_1.element(protractor_1.by.css(this.rejectbuttoncss));
    }
    checkemptysubmitonAddEQdetailpage() {
        protractor_1.browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
        utilobj.pressEnterKey();
        winstonlogger_1.CustomLogger.logger.info("The empty submit on Addplant EQ page has been performed");
    }
    ;
    checkbyenteringtypecode(code) {
        this.Typecode.sendKeys(code);
        utilobj.pressEnterKey();
        winstonlogger_1.CustomLogger.logger.info("The Entered typecode value is " + code);
    }
    ;
    enterCentre(centercode) {
        this.Center.sendKeys(centercode);
        winstonlogger_1.CustomLogger.logger.info("The Entered center code value is " + centercode);
    }
    ;
    enterEQleasor(leasor) {
        protractor_1.browser.actions().mouseMove(this.EQleasor).sendKeys(protractor_1.protractor.Key.TAB + protractor_1.protractor.Key.F4).perform();
        protractor_1.browser.wait(EC.presenceOf(this.filterbutton), 50000);
        this.orgname.sendKeys(leasor);
        this.filterbutton.click();
        this.leasorbtns.get(0).click();
        utilobj.pressEnterKey();
        winstonlogger_1.CustomLogger.logger.info("The entered leasor code is " + leasor);
    }
    ;
    enterSegment(segmentval) {
        this.segmentdropdown.click();
        this.segmentoptions.each(function (option) {
            option.getAttribute("ng-reflect-value").then(function (attribute) {
                if (attribute == segmentval)
                    option.click();
            });
        });
        winstonlogger_1.CustomLogger.logger.info("The selected segment is " + segmentval);
    }
    ;
    enterDescription(description) {
        this.descriptiontxt.sendKeys(description);
        winstonlogger_1.CustomLogger.logger.info("The entered description is " + description);
    }
    ;
    enterReadingdate(date) {
        protractor_1.browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
        protractor_1.browser.sleep(2000);
        this.Readingdate.sendKeys(date);
        winstonlogger_1.CustomLogger.logger.info("The entered Reading date is " + date);
    }
    ;
    pressYesbutton(response) {
        protractor_1.browser.wait(EC.presenceOf(this.yesbutton), 50000);
        if (response == 'y' || response == 'Y') {
            this.yesbutton.click();
        }
        else {
            this.nobutton.click();
        }
    }
    validateaddition() {
        protractor_1.browser.wait(EC.presenceOf(addobj.addplantEQcode), 50000);
        utilobj.pressF3key();
        winstonlogger_1.CustomLogger.logger.info("The add operation been completed successfully");
    }
    ;
}
exports.addEQdetail = addEQdetail;
