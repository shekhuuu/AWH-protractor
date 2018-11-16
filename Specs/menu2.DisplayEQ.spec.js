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
const utility_1 = require("../Utils/utility");
const menu2_mainpage_PO_1 = require("../PO/menu2.mainpage.PO");
const appdata = __importStar(require("../dataConfig/appData.json"));
const menu2_displayEQ_PO_1 = require("../PO/menu2.displayEQ.PO");
describe('Display Plant EQ Test Suite', () => {
    let utilobj = new utility_1.utlityconf();
    let WorkplantDisplayObj = new menu2_mainpage_PO_1.workplant_Displaypage();
    let displayobj = new menu2_displayEQ_PO_1.displayplantEQ();
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var workplantheadingtxt = appdata.WorkplantEQ_display.headingtext;
    var regioncodedrpOption = appdata.WorkplantEQ_display.regioncodetoselect;
    var eqcode = appdata.WorkplantEQ_displayEQcode.DisplayEQcode;
    var pageheading = appdata.WorkplantEQ_displayEQcode.Displaypageheading;
    var displayscreentxt = appdata.WorkplantEQ_displayEQcode.Displaypagescreentxt;
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
    it('Verify grid loading on Work plant EQ main page', () => {
        WorkplantDisplayObj.clickRegioncodeDrp();
        WorkplantDisplayObj.selectRegionCode(regioncodedrpOption);
        WorkplantDisplayObj.clickcontinuebutton();
        WorkplantDisplayObj.checkgridload();
    });
    it('Verify navigation to display EQ page', () => {
        displayobj.enterEQcode(eqcode);
        utilobj.pressEnterKey();
        displayobj.clickElementradiobtn();
        displayobj.pressdisplaybutton();
    });
    it('Verify page heading on Display plant EQ page', () => {
        utilobj.verifyPageheading(pageheading);
    });
    it('Verify Screen name for Display plant EQ page', () => {
        utilobj.VerifyScreenName(displayscreentxt);
        expect(true).toBe(false);
    });
    it('Validate display for plant EQ', () => {
        utilobj.pressF3key();
    });
});
