import *  as appdata from "../dataConfig/appData.json";
import { utlityconf } from "../Utils/utility.js";
import { browser } from "protractor";
import { workplant_Displaypage } from "../PO/menu2.mainpage.PO.js";
import { AddEQcode } from "../PO/menu2.AddEQcode.PO.js";
import { addEQdetail } from "../PO/menu2.AddEQdetailed.PO.js";

describe('Add plant Equipment Testsuite', () => {
    
//data values 
var mainpagetitle=(<any>appdata).mainpage.title;
var mainpageheading=(<any>appdata).mainpage.Heading;
var workplantheadingtxt=(<any>appdata).WorkplantEQ_display.headingtext;
var regioncodedrpOption=(<any>appdata).WorkplantEQ_display.regioncodetoselect;
var addplantheadingtxt=(<any>appdata).WorkplantEQ_AddEQcode.pageheadingtext;
var EQcode=(<any>appdata).WorkplantEQ_AddEQcode.AddEQcode;
var addEQcodeheadingtxt=(<any>appdata).WorkplantEQ_AddEQcode.addpageheading;
var Typecodetxt=(<any>appdata).WorkplantEQ_AddEQcode.Typecode;
var Centercode=(<any>appdata).WorkplantEQ_AddEQcode.center;
var leasorcode=(<any>appdata).WorkplantEQ_AddEQcode.leasor;
var segmentcode=(<any>appdata).WorkplantEQ_AddEQcode.segmentcode;
var Descriptiontext=(<any>appdata).WorkplantEQ_AddEQcode.Description;
var readingdate=(<any>appdata).WorkplantEQ_AddEQcode.Readingdate;
var mainpagescreentxt=(<any>appdata).WorkplantEQ_display.screentxt;
var addEQpagescreentext=(<any>appdata).WorkplantEQ_AddEQcode.screentext1;
var addEQdetailpagescreentxt=(<any>appdata).WorkplantEQ_AddEQcode.screentext2;

//pageobjects
let utilobj=new utlityconf();
let WorkplantDisplayObj=new workplant_Displaypage();
let addobj=new AddEQcode();
let adddetailobj=new addEQdetail

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