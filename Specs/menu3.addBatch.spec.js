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
const menu3_main_PO_js_1 = require("../PO/menu3.main.PO.js");
const menu2_mainpage_PO_js_1 = require("../PO/menu2.mainpage.PO.js");
const protractor_1 = require("protractor");
var EC = protractor_1.protractor.ExpectedConditions;
describe('Menu three main Add batch Test suite', () => {
    //pageobjects 
    let utilobj = new utility_js_1.utlityconf();
    let menu3obj = new menu3_main_PO_js_1.menu3main();
    let mainobj = new menu2_mainpage_PO_js_1.workplant_Displaypage();
    //data values for menu three
    var readingdateval = appdata.BuildReadingbatch_Addbatch.Readingdate;
    var invalidreadingdateval = appdata.BuildReadingbatch_Addbatch.InvalidReadingDate;
    var centercodeval = appdata.BuildReadingbatch_Addbatch.Centercode;
    var Wrongcentercodeval = appdata.BuildReadingbatch_Addbatch.wrongCentercode;
    var regioncodeval = appdata.BuildReadingbatch_Addbatch.regioncode;
    var mainpagetitle = appdata.mainpage.title;
    var mainpageheading = appdata.mainpage.Heading;
    var menuthreeheading = appdata.BuildReadingbatch_Display.pageheadingtext;
    var menuthreescreenName = appdata.BuildReadingbatch_Display.screentxt;
    var dateErrortxt = appdata.BuildReadingbatch_Addbatch.dateErrormsg;
    var Regionerrortxt = appdata.BuildReadingbatch_Addbatch.Regionerrormsg;
    var centerErrortxt = appdata.BuildReadingbatch_Addbatch.centerErrormsg;
    beforeAll(() => {
        utilobj.launchurl(protractor_1.browser.params.baseurl);
    });
    it('Verify menu page heading', () => {
        utilobj.verifyPageheading(mainpageheading);
    });
    it('Verify menu page title', () => {
        utilobj.verifyMainpagetitle(mainpagetitle);
    });
    it('Verify navigation to main options screen ', () => {
        utilobj.clickEQmenu();
    });
    it('Verify navigation to menu three main screen', () => {
        utilobj.clickEQmenuthreelink();
    });
    it('Verify heading on menu three page', () => {
        utilobj.verifyPageheading(menuthreeheading);
    });
    it('Verify screen name on menu three page', () => {
        utilobj.VerifyScreenName(menuthreescreenName);
    });
    it('Verify prescence of paragraph on menu three main page', () => {
        menu3obj.verifyprinterText();
    });
    describe('=>Field operations Test suite', () => {
        it('Verify empty submit on main page of menu three', () => {
            utilobj.pressEnterKey();
        });
        it('Verify date validation message in the empty submit case', () => {
            menu3obj.validateDaterror(dateErrortxt);
        });
        it('Verify batch submission on main page of menu three by entering invalid value in Reading date field', () => {
            menu3obj.enterReadingDate(invalidreadingdateval);
            utilobj.pressEnterKey();
        });
        it('Verify Date validation message displayed for entering invalid value in Reading date field', () => {
            menu3obj.validateDaterror(dateErrortxt);
        });
        it('Verify batch submission on main page of menu three by entering valid reading date only', () => {
            menu3obj.enterReadingDate(readingdateval);
            utilobj.pressEnterKey();
        });
        it('Verify region code error message', () => {
            menu3obj.validateErrormesage(Regionerrortxt);
        });
        it('Verify batch submission on main page of menu three by entering non-existing center code value', () => {
            mainobj.clickRegioncodeDrp();
            mainobj.selectRegionCode(regioncodeval);
            menu3obj.entercentercode(Wrongcentercodeval);
            utilobj.pressEnterKey();
        });
        it('Verify non-existing center code validation message ', () => {
            menu3obj.validateErrormesage(centerErrortxt);
        });
        it('Verify batch submission by entering valid values in all fields', () => {
            menu3obj.entercentercode(centercodeval);
            utilobj.pressEnterKey();
            menu3obj.enterconfirmresponse('Y');
            protractor_1.browser.wait(EC.presenceOf(utilobj.EQmenuthreelink), 50000);
            utilobj.pressF3key();
        });
    });
});
