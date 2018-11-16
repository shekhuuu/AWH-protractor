import *  as appdata from "../dataConfig/appData.json";
import { utlityconf } from "../Utils/utility.js";
import { workplant_Displaypage } from "../PO/menu2.mainpage.PO.js";
import { browser } from "protractor";
import { editclick } from "../PO/menu2.editclicked.PO.js";
import { editEQdetail } from "../PO/menu2.EditEQDetailed.PO.js";


describe('Edit plant EQ Testsuite', () => {
//data values 
var mainpagetitle=(<any>appdata).mainpage.title;
var mainpageheading=(<any>appdata).mainpage.Heading;
var workplantheadingtxt=(<any>appdata).WorkplantEQ_display.headingtext;
var regioncodedrpOption=(<any>appdata).WorkplantEQ_display.regioncodetoselect;
var EditEQcode=(<any>appdata).WorkplantEQ_EditEQcode.EditEQCode;
var descvalue=(<any>appdata).WorkplantEQ_EditEQcode.DescriptionComment;
var leasemaxunitvalue=(<any>appdata).WorkplantEQ_EditEQcode.leasemaxunitval;
var mainpagescreentxt=(<any>appdata).WorkplantEQ_display.screentxt;
var editpagescreentxt=(<any>appdata).WorkplantEQ_EditEQcode.EditscreenName;
var editpageheadingtext=(<any>appdata).WorkplantEQ_EditEQcode.Editpageheadingtxt;

let utilobj=new utlityconf();
let WorkplantDisplayObj=new workplant_Displaypage();
let editclikobj=new editclick();
let editdetailobj=new editEQdetail();


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