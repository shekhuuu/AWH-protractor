import { CustomLogger } from "../winstonsetup/winstonlogger";
import *  as locatordata from "../dataConfig/appLocators.json";
import { browser,element,by,protractor } from "protractor";
import { editclick } from "./menu2.editclicked.PO.js";
import { utlityconf } from "../Utils/utility.js";
var EC=protractor.ExpectedConditions;
let editclickobj=new editclick();
let utilobj=new utlityconf();

export class editEQdetail{

    descriptionfieldid=(<any>locatordata).EditEQdetailed.Descriptionfieldid;
    leasemaxunitid=(<any>locatordata).EditEQdetailed.leasemaxunitsid;
    yesbuttoncss=(<any>locatordata).EditEQdetailed.yesbuttoncss;
    nobuttoncss=(<any>locatordata).EditEQdetailed.nobuttoncss;

    descriptionfield=element(by.id(this.descriptionfieldid));
    leasemaxunitsvalue=element(by.id(this.leasemaxunitid));
    yesbutton=element(by.css(this.yesbuttoncss));
    nobutton=element(by.css(this.nobuttoncss));

    public changedescriptionvalue(descval:string) {
        browser.wait(EC.presenceOf(this.descriptionfield),50000);
        if(this.descriptionfield.isDisplayed() && this.descriptionfield.isEnabled()){
            this.descriptionfield.clear();
            this.descriptionfield.sendKeys(descval);
            CustomLogger.logger.info("The Descrption field value has been updated to "+descval);
        }
    };

    public changeLeasemaxunits(leasemaxunitval:number) {
        if (this.leasemaxunitsvalue.isDisplayed() && this.leasemaxunitsvalue.isEnabled()) {
            this.leasemaxunitsvalue.clear();
            this.leasemaxunitsvalue.sendKeys(leasemaxunitval);
            CustomLogger.logger.info("The lease max value field value has been updated to "+leasemaxunitval);
        }
    };

    public enterconfirmResponse(response:string) {
        browser.wait(EC.presenceOf(this.yesbutton),50000);
        if(response=='Y' || response=='y'){
          this.yesbutton.click();
        }
        else{
          this.nobutton.click();
        }
    };

    public validatePlantEQedit(){
    browser.wait(EC.presenceOf(editclickobj.typecodefilter),50000);
    utilobj.pressF3key();
    CustomLogger.logger.info("The edit operation has been completed successfully");
    };






}