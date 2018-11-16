import { workplant_Displaypage } from "../PO/menu2.mainpage.PO";
import { utlityconf } from "../Utils/utility";
import *  as appdata from "../dataConfig/appData.json";
import { browser } from "protractor";
import { workplant_addreading } from "../PO/menu2.AddReading.PO";

describe('Add Reading Test Suite', () => {
    let utilobj=new utlityconf();
    let WorkplantDisplayObj=new workplant_Displaypage();
    let addreadingobj=new workplant_addreading();

    var mainpagetitle=(<any>appdata).mainpage.title;
    var mainpageheading=(<any>appdata).mainpage.Heading;
    var workplantheadingtxt=(<any>appdata).WorkplantEQ_display.headingtext;
    var regioncodedrpOption=(<any>appdata).WorkplantEQ_display.regioncodetoselect;
    var mainpagescreentxt=(<any>appdata).WorkplantEQ_display.screentxt;
    var AddreadingEQcode=(<any>appdata).Workplant_addReading.addreadingcode;
    var addReadingheading=(<any>appdata).Workplant_addReading.addreadingheadingtxt;
    var addreadingscreenName=(<any>appdata).Workplant_addReading.addreadingscreenNametxt;
    var readingtype=(<any>appdata).Workplant_addReading.Readingtypecode;
    var readingvalue=(<any>appdata).Workplant_addReading.Readingvalue;

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