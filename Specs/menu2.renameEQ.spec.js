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
const menu2_Renameclicked_PO_1 = require("../PO/menu2.Renameclicked.PO");
const menu2_renamedetail_PO_1 = require("../PO/menu2.renamedetail.PO");
describe('Rename plant EQ Test Suite', () => {
    let utilobj = new utility_1.utlityconf();
    let WorkplantDisplayObj = new menu2_mainpage_PO_1.workplant_Displaypage();
    let renameclickobj = new menu2_Renameclicked_PO_1.renameclicked();
    let renameobj = new menu2_renamedetail_PO_1.renameEQdetailed();
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var workplantheadingtxt = appdata.WorkplantEQ_display.headingtext;
    var regioncodedrpOption = appdata.WorkplantEQ_display.regioncodetoselect;
    var renameEQcode = appdata.WorkplantEQ_renameEQcode.RenameEQcode;
    var newrenameEQcode = appdata.WorkplantEQ_renameEQcode.NewrenameEQcode;
    var renamepageHeading = appdata.WorkplantEQ_renameEQcode.renamepagetitle;
    var renamepagescreenName = appdata.WorkplantEQ_renameEQcode.Renamepagescreentxt;
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
    it('Verify navigation to rename plant EQ button', () => {
        renameclickobj.fillcode(renameEQcode);
        utilobj.pressEnterKey();
        renameclickobj.clickelement();
        renameclickobj.pressrenamebutton();
    });
    it('Verify page heading for rename EQ page', () => {
        utilobj.verifyPageheading(renamepageHeading);
    });
    it('Verify rename page Screen name', () => {
        utilobj.VerifyScreenName(renamepagescreenName);
    });
    it('Verify entering of values for rename operation', () => {
        renameobj.enternewEQcode(newrenameEQcode);
        utilobj.pressEnterKey();
    });
    it('Verify performing of rename operation', () => {
        renameobj.chooseconfirmResponse('y');
        renameobj.validateRename();
    });
});
