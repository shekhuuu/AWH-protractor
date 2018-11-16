import *  as appdata from "../dataConfig/appData.json";
import { utlityconf } from "../Utils/utility.js";
import { menu3main } from "../PO/menu3.main.PO.js";
import { workplant_Displaypage } from "../PO/menu2.mainpage.PO.js";
import { browser, protractor } from "protractor";
var EC=protractor.ExpectedConditions;

describe('Menu three main Add batch Test suite', () => {

    //pageobjects 

    let utilobj=new utlityconf();
    let menu3obj=new menu3main();
    let mainobj=new workplant_Displaypage();

     //data values for menu three

     var readingdateval=(<any>appdata).BuildReadingbatch_Addbatch.Readingdate;
     var invalidreadingdateval=(<any>appdata).BuildReadingbatch_Addbatch.InvalidReadingDate;
     var centercodeval=(<any>appdata).BuildReadingbatch_Addbatch.Centercode;
     var Wrongcentercodeval=(<any>appdata).BuildReadingbatch_Addbatch.wrongCentercode;
     var regioncodeval=(<any>appdata).BuildReadingbatch_Addbatch.regioncode;
     var mainpagetitle=(<any>appdata).mainpage.title;
     var mainpageheading=(<any>appdata).mainpage.Heading;
     var menuthreeheading=(<any>appdata).BuildReadingbatch_Display.pageheadingtext;
     var menuthreescreenName=(<any>appdata).BuildReadingbatch_Display.screentxt;
     var dateErrortxt=(<any>appdata).BuildReadingbatch_Addbatch.dateErrormsg;
     var Regionerrortxt=(<any>appdata).BuildReadingbatch_Addbatch.Regionerrormsg;
     var centerErrortxt=(<any>appdata).BuildReadingbatch_Addbatch.centerErrormsg;

     beforeAll(()=>{
      utilobj.launchurl(browser.params.baseurl);
     })

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
             browser.wait(EC.presenceOf(utilobj.EQmenuthreelink),50000);
             utilobj.pressF3key();
         });

     });
});