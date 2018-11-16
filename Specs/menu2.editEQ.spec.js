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
const menu2_mainpage_PO_js_1 = require("../PO/menu2.mainpage.PO.js");
const protractor_1 = require("protractor");
const menu2_editclicked_PO_js_1 = require("../PO/menu2.editclicked.PO.js");
const menu2_EditEQDetailed_PO_js_1 = require("../PO/menu2.EditEQDetailed.PO.js");
describe('Edit plant EQ Testsuite', () => {
    //data values 
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var workplantheadingtxt = appdata.WorkplantEQ_display.headingtext;
    var regioncodedrpOption = appdata.WorkplantEQ_display.regioncodetoselect;
    var EditEQcode = appdata.WorkplantEQ_EditEQcode.EditEQCode;
    var descvalue = appdata.WorkplantEQ_EditEQcode.DescriptionComment;
    var leasemaxunitvalue = appdata.WorkplantEQ_EditEQcode.leasemaxunitval;
    var mainpagescreentxt = appdata.WorkplantEQ_display.screentxt;
    var editpagescreentxt = appdata.WorkplantEQ_EditEQcode.EditscreenName;
    var editpageheadingtext = appdata.WorkplantEQ_EditEQcode.Editpageheadingtxt;
    let utilobj = new utility_js_1.utlityconf();
    let WorkplantDisplayObj = new menu2_mainpage_PO_js_1.workplant_Displaypage();
    let editclikobj = new menu2_editclicked_PO_js_1.editclick();
    let editdetailobj = new menu2_EditEQDetailed_PO_js_1.editEQdetail();
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
    it('Verify clicking of edit plant EQ button', () => {
        editclikobj.enterfiltercode(EditEQcode);
        utilobj.pressEnterKey();
        editclikobj.selectelement();
        editclikobj.presseditbutton();
    });
    it('Verify edit plant EQ page heading text', () => {
        utilobj.verifyPageheading(editpageheadingtext);
    });
    it('Verify edit plant EQ page screen name', () => {
        utilobj.VerifyScreenName(editpagescreentxt);
    });
    it('Verify entering of edit plant EQ values', () => {
        editdetailobj.changedescriptionvalue(descvalue);
        editdetailobj.changeLeasemaxunits(leasemaxunitvalue);
        utilobj.pressEnterKey();
    });
    it('Verify editing of values for Edit plant EQ', () => {
        editdetailobj.enterconfirmResponse('y');
        editdetailobj.validatePlantEQedit();
    });
});
