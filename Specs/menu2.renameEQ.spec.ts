import { browser } from "protractor";
import { utlityconf } from "../Utils/utility";
import { workplant_Displaypage } from "../PO/menu2.mainpage.PO";
import *  as appdata from "../dataConfig/appData.json";
import { renameclicked } from "../PO/menu2.Renameclicked.PO";
import { renameEQdetailed } from "../PO/menu2.renamedetail.PO";

describe('Rename plant EQ Test Suite', () => {

 let utilobj=new utlityconf();
 let WorkplantDisplayObj=new workplant_Displaypage();
 let renameclickobj=new renameclicked();
 let renameobj=new renameEQdetailed();

var mainpagetitle=(<any>appdata).mainpage.title;
var mainpageheading=(<any>appdata).mainpage.Heading;
var workplantheadingtxt=(<any>appdata).WorkplantEQ_display.headingtext;
var regioncodedrpOption=(<any>appdata).WorkplantEQ_display.regioncodetoselect;
var renameEQcode=(<any>appdata).WorkplantEQ_renameEQcode.RenameEQcode;
var newrenameEQcode=(<any>appdata).WorkplantEQ_renameEQcode.NewrenameEQcode;
var renamepageHeading=(<any>appdata).WorkplantEQ_renameEQcode.renamepagetitle;
var renamepagescreenName=(<any>appdata).WorkplantEQ_renameEQcode.Renamepagescreentxt;

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