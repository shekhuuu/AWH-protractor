"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu2_mainpage_PO_1 = require("../PO/menu2.mainpage.PO");
const utility_1 = require("../Utils/utility");
const appdata = __importStar(require("../dataConfig/appData.json"));
const protractor_1 = require("protractor");
const menu2_AddReading_PO_1 = require("../PO/menu2.AddReading.PO");
describe('Add Reading Test Suite', () => {
    let utilobj = new utility_1.utlityconf();
    let WorkplantDisplayObj = new menu2_mainpage_PO_1.workplant_Displaypage();
    let addreadingobj = new menu2_AddReading_PO_1.workplant_addreading();
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var workplantheadingtxt = appdata.WorkplantEQ_display.headingtext;
    var regioncodedrpOption = appdata.WorkplantEQ_display.regioncodetoselect;
    var mainpagescreentxt = appdata.WorkplantEQ_display.screentxt;
    var AddreadingEQcode = appdata.Workplant_addReading.addreadingcode;
    var addReadingheading = appdata.Workplant_addReading.addreadingheadingtxt;
    var addreadingscreenName = appdata.Workplant_addReading.addreadingscreenNametxt;
    var readingtype = appdata.Workplant_addReading.Readingtypecode;
    var readingvalue = appdata.Workplant_addReading.Readingvalue;
    beforeAll(() => {
        utilobj.launchurl(protractor_1.browser.params.baseurl);
    });
    it('Verify main page title', () => {
        utilobj.verifyMainpagetitle(mainpagetitle);
    });
    it('Verify main page heading', () => {
        utilobj.verifyPageheading(mainpageheading);
    });
    it('Verify clicking on Equipment handling menu', () => {
        utilobj.clickEQmenu();
    });
    it('Verify clicking on Menu option Two of Equipment handling menu', () => {
        utilobj.clickEQmenutwolink();
    });
    it('Verify work plant EQ display page heading text', () => {
        utilobj.verifyPageheading(workplantheadingtxt);
    });
    it('Verify work plant EQ display page screen name', () => {
        utilobj.VerifyScreenName(mainpagescreentxt);
    });
    it('Verify grid loading on Work plant EQ main page', () => {
        WorkplantDisplayObj.clickRegioncodeDrp();
        WorkplantDisplayObj.selectRegionCode(regioncodedrpOption);
        WorkplantDisplayObj.clickcontinuebutton();
        WorkplantDisplayObj.checkgridload();
    });
    it('Verify navigation to add reading page', () => {
        addreadingobj.enterEquipmentcode(AddreadingEQcode);
        utilobj.pressEnterKey();
        addreadingobj.clickAddreadingcode();
        addreadingobj.pressAddreadingbtn();
    });
    it('Verify page heading on add reading page', () => {
        utilobj.verifyPageheading(addReadingheading);
    });
    it('Verify screenName on add reading page', () => {
        utilobj.VerifyScreenName(addreadingscreenName);
    });
    it('Verify Entering of valid data on Add reading page', () => {
        addreadingobj.selectReadingtype(readingtype);
        addreadingobj.enterReadingvalue(readingvalue);
    });
    it('Verify Addition of Reading for specified EQ code', () => {
        addreadingobj.selectconfirmResponse('y');
        addreadingobj.validateAddreading();
    });
});
