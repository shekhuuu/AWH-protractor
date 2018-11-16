"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const appdata = __importStar(require("../dataConfig/appData.json"));
const utility_js_1 = require("../Utils/utility.js");
const protractor_1 = require("protractor");
const menu2_mainpage_PO_js_1 = require("../PO/menu2.mainpage.PO.js");
const menu2_AddEQcode_PO_js_1 = require("../PO/menu2.AddEQcode.PO.js");
const menu2_AddEQdetailed_PO_js_1 = require("../PO/menu2.AddEQdetailed.PO.js");
describe('Add plant Equipment Testsuite', () => {
    //data values 
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var workplantheadingtxt = appdata.WorkplantEQ_display.headingtext;
    var regioncodedrpOption = appdata.WorkplantEQ_display.regioncodetoselect;
    var addplantheadingtxt = appdata.WorkplantEQ_AddEQcode.pageheadingtext;
    var EQcode = appdata.WorkplantEQ_AddEQcode.AddEQcode;
    var addEQcodeheadingtxt = appdata.WorkplantEQ_AddEQcode.addpageheading;
    var Typecodetxt = appdata.WorkplantEQ_AddEQcode.Typecode;
    var Centercode = appdata.WorkplantEQ_AddEQcode.center;
    var leasorcode = appdata.WorkplantEQ_AddEQcode.leasor;
    var segmentcode = appdata.WorkplantEQ_AddEQcode.segmentcode;
    var Descriptiontext = appdata.WorkplantEQ_AddEQcode.Description;
    var readingdate = appdata.WorkplantEQ_AddEQcode.Readingdate;
    var mainpagescreentxt = appdata.WorkplantEQ_display.screentxt;
    var addEQpagescreentext = appdata.WorkplantEQ_AddEQcode.screentext1;
    var addEQdetailpagescreentxt = appdata.WorkplantEQ_AddEQcode.screentext2;
    //pageobjects
    let utilobj = new utility_js_1.utlityconf();
    let WorkplantDisplayObj = new menu2_mainpage_PO_js_1.workplant_Displaypage();
    let addobj = new menu2_AddEQcode_PO_js_1.AddEQcode();
    let adddetailobj = new menu2_AddEQdetailed_PO_js_1.addEQdetail;
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
    it('Verify pressing of Add button for Add Plant EQ', () => {
        utilobj.pressF6key();
    });
    it('Verify Add Plant EQ page heading text', () => {
        utilobj.verifyPageheading(addplantheadingtxt);
    });
    it('Verify add plant EQ page scren name', () => {
        utilobj.VerifyScreenName(addEQpagescreentext);
    });
    it('Verify Empty submit for Add plant EQ code', () => {
        utilobj.pressEnterKey();
    });
    it('Verify submission of valid EQ Code for Add plant EQ code', () => {
        addobj.enterAddEqcode(EQcode);
        utilobj.pressEnterKey();
    });
    it('Verify add EQ code detailed page heading text', () => {
        utilobj.verifyPageheading(addEQcodeheadingtxt);
    });
    it('Verify add EQ code detailed page screen name', () => {
        utilobj.VerifyScreenName(addEQdetailpagescreentxt);
    });
    it('Verify Empty submit on Add plant EQ detailed page ', () => {
        adddetailobj.checkemptysubmitonAddEQdetailpage();
    });
    it('Verify submission by entering typecode on Add plant EQ detailed page', () => {
        adddetailobj.checkbyenteringtypecode(Typecodetxt);
    });
    it('Verify Entering of valid data on Add plant EQ detailed page', () => {
        adddetailobj.enterCentre(Centercode);
        adddetailobj.enterEQleasor(leasorcode);
        adddetailobj.enterSegment(segmentcode);
        adddetailobj.enterDescription(Descriptiontext);
        adddetailobj.enterReadingdate(readingdate);
        utilobj.pressEnterKey();
    });
    it('Verify addition of Add plant Equipment', () => {
        adddetailobj.pressYesbutton('y');
        adddetailobj.validateaddition();
    });
});
