import *  as locatordata from "../dataConfig/appLocators.json";
import { browser,element,by,protractor } from "protractor";
import { utlityconf } from "../Utils/utility.js";
import { CustomLogger } from "../winstonsetup/winstonlogger";
import { AddEQcode } from "./menu2.AddEQcode.PO.js";

var EC=protractor.ExpectedConditions;
let addobj=new AddEQcode();
let utilobj=new utlityconf();

export class addEQdetail{

    //element locators
    Typecodecss=(<any>locatordata).AddEQdetail.typecodecss;
    Centercss=(<any>locatordata).AddEQdetail.centercss;
    EQleasorcss=(<any>locatordata).AddEQdetail.EQleasorcss;
    filterbuttoncss=(<any>locatordata).AddEQdetail.Filterbuttoncss;
    orgnamecss=(<any>locatordata).AddEQdetail.orgnamecss;
    leasorradiobtncss=(<any>locatordata).AddEQdetail.leasorradiobtncss;
    Segmentdropdowncss=(<any>locatordata).AddEQdetail.Segmentdrpcss;
    Segmentdrpoptioncss=(<any>locatordata).AddEQdetail.Segmentdrpoptioncss;
    Descriptioncss=(<any>locatordata).AddEQdetail.Descriptiontxtcss;
    Readingdatecss=(<any>locatordata).AddEQdetail.Readingdatecss;
    confirmbuttoncss=(<any>locatordata).AddEQdetail.yesbuttoncss;
    rejectbuttoncss=(<any>locatordata).AddEQdetail.nobuttoncss;

    //page elements
    Typecode=element(by.css(this.Typecodecss));
    Center=element(by.css(this.Centercss));
    EQleasor=element(by.css(this.EQleasorcss));
    filterbutton=element(by.css(this.filterbuttoncss));
    orgname=element(by.css(this.orgnamecss));
    leasorbtns=element.all(by.css(this.leasorradiobtncss));
    segmentdropdown=element(by.css(this.Segmentdropdowncss));
    segmentoptions=element.all(by.css(this.Segmentdrpoptioncss));
    descriptiontxt=element(by.css(this.Descriptioncss));
    Readingdate=element(by.css(this.Readingdatecss));
    yesbutton=element(by.css(this.confirmbuttoncss));
    nobutton=element(by.css(this.rejectbuttoncss));

    public checkemptysubmitonAddEQdetailpage() {
        browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
        utilobj.pressEnterKey();
        CustomLogger.logger.info("The empty submit on Addplant EQ page has been performed");
    };

    public checkbyenteringtypecode(code:string){
      this.Typecode.sendKeys(code);
      utilobj.pressEnterKey();
      CustomLogger.logger.info("The Entered typecode value is "+code);
    };

    public enterCentre(centercode:string){
        this.Center.sendKeys(centercode);
        CustomLogger.logger.info("The Entered center code value is "+centercode);
    };

    public enterEQleasor(leasor:string){
    browser.actions().mouseMove(this.EQleasor).sendKeys(protractor.Key.TAB+protractor.Key.F4).perform();
    browser.wait(EC.presenceOf(this.filterbutton),50000);
    this.orgname.sendKeys(leasor);
    this.filterbutton.click();
    this.leasorbtns.get(0).click();
    utilobj.pressEnterKey();
    CustomLogger.logger.info("The entered leasor code is "+leasor);
    };

    public enterSegment(segmentval:string){
    this.segmentdropdown.click();
    this.segmentoptions.each(function(option:any){
        option.getAttribute("ng-reflect-value").then(function(attribute:any){
            if(attribute==segmentval)
            option.click();
        });
      });
      CustomLogger.logger.info("The selected segment is "+segmentval);
    };

    public enterDescription(description:string) {
        this.descriptiontxt.sendKeys(description);
        CustomLogger.logger.info("The entered description is "+description);
    };

    public enterReadingdate(date:string) {
      browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
      browser.sleep(2000);
      this.Readingdate.sendKeys(date);
      CustomLogger.logger.info("The entered Reading date is "+date);
    };

    public pressYesbutton(response:string){
        browser.wait(EC.presenceOf(this.yesbutton),50000);
        if(response=='y' || response=='Y'){
            this.yesbutton.click();
        }
        else{
            this.nobutton.click();
        }
    }

    public validateaddition(){
        browser.wait(EC.presenceOf(addobj.addplantEQcode),50000);
        utilobj.pressF3key();
        CustomLogger.logger.info("The add operation been completed successfully");
    };
}



