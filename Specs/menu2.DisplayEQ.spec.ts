import { browser } from "protractor";
import { utlityconf } from "../Utils/utility";
import { workplant_Displaypage } from "../PO/menu2.mainpage.PO";
import *  as appdata from "../dataConfig/appData.json";
import { displayplantEQ } from "../PO/menu2.displayEQ.PO";

describe('Display Plant EQ Test Suite', () => {
    
    let utilobj=new utlityconf();
    let WorkplantDisplayObj=new workplant_Displaypage();
    let displayobj=new displayplantEQ();

    var mainpagetitle=(<any>appdata).mainpage.title;
    var mainpageheading=(<any>appdata).mainpage.Heading;
    var workplantheadingtxt=(<any>appdata).WorkplantEQ_display.headingtext;
    var regioncodedrpOption=(<any>appdata).WorkplantEQ_display.regioncodetoselect;
    var eqcode=(<any>appdata).WorkplantEQ_displayEQcode.DisplayEQcode;
    var pageheading=(<any>appdata).WorkplantEQ_displayEQcode.Displaypageheading;
    var displayscreentxt=(<any>appdata).WorkplantEQ_displayEQcode.Displaypagescreentxt;

    beforeAll(()=>{
        utilobj.launchurl(browser.params.baseurl);
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