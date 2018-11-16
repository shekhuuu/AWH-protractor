import * as locatordata from "../dataConfig/appLocators.json";
import { CustomLogger } from "../winstonsetup/winstonlogger";
import { element, by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";
import { utlityconf } from "../Utils/utility.js";

var EC=protractor.ExpectedConditions;
let utilobj=new utlityconf();

export class workplant_addreading{

    //locators from json file

    typecodefiltercss=(<any>locatordata).workplantEQ_AddReading.typecodefiltercss;
    elementradiobtncss= (<any>locatordata).workplantEQ_AddReading.elementradiobtncss;
    addReadingbtntxt=(<any>locatordata).workplantEQ_AddReading.Add_readingBtntxt;
    readingtypedropdownid=(<any>locatordata).workplantEQ_AddReading.Readingtypedrpid;
    Readingdropoptionscss=(<any>locatordata).workplantEQ_AddReading.Readingtypeoptioncss;
    Readingvalueid=(<any>locatordata).workplantEQ_AddReading.readingvalueid;
    Continuebtncss=(<any>locatordata).common.continuebuttoncss;
    ConfirmYesbutton=(<any>locatordata).workplantEQ_AddReading.Yesbuttoncss;
    ConfirmNobutton=(<any>locatordata).workplantEQ_AddReading.Nobuttoncss;

    //elements of the page

    typecodefield=element(by.css(this.typecodefiltercss));
    elementradiobtn=element(by.css((this.elementradiobtncss)));
    addreadingbtn=element.all(by.buttonText(this.addReadingbtntxt));
    readingtypedrp=element(by.id(this.readingtypedropdownid));
    readingtypeDrpoption=element.all(by.css(this.Readingdropoptionscss));
    Readingvalue=element(by.id(this.Readingvalueid));
    Continuebtn=element(by.css(this.Continuebtncss));
    Yesbutton=element(by.css(this.ConfirmYesbutton));
    Nobutton=element(by.css(this.ConfirmNobutton));

    //public methods

    public enterEquipmentcode(eqcode:string){
      if (this.typecodefield.isDisplayed() && this.typecodefield.isEnabled()) {
          this.typecodefield.sendKeys(eqcode);
      }

      CustomLogger.logger.info("The EQ code value entered is"+eqcode);
    };

    public clickAddreadingcode() {
       if (this.elementradiobtn.isDisplayed()) {
           this.elementradiobtn.click();
       } 
    }

    public pressAddreadingbtn() {
        if (this.addreadingbtn.isDisplayed() && this.addreadingbtn.isEnabled()) {
            this.addreadingbtn.click();
        }

        CustomLogger.logger.info("Add Reading button has been pressed successfully")
    };

    
    public selectReadingtype(type:string) {
        browser.wait(EC.presenceOf(this.readingtypedrp),50000);
        this.readingtypedrp.click();
        this.readingtypeDrpoption.each(function(option:any){
            option.getAttribute("ng-reflect-value").then(function(value:any){
             if(value==type){
                option.click();
               }
            });
        });

        CustomLogger.logger.info("The selected option code for reading type is "+type);
    };

    public enterReadingvalue(value:number) {
        if (this.Readingvalue.isDisplayed()) {
            this.Readingvalue.sendKeys(value)
        }
        CustomLogger.logger.info("the entered value of reading value is "+value);
        
    };

    public selectconfirmResponse(response:string) {
        utilobj.pressEnterKey();
        browser.wait(EC.presenceOf(this.Yesbutton),50000);
        if (response=='Y'|| response=='y') {
            if (this.Yesbutton.isDisplayed()) {
                this.Yesbutton.click();
            }
        } else {
            if (this.Nobutton.isDisplayed()) {
                this.Nobutton.click();
            }
        }
    };

    public validateAddreading(){
     browser.wait(EC.visibilityOf(this.Continuebtn),50000);
     CustomLogger.logger.info("Add reading operation has been completed successfully");
     utilobj.pressF3key();
    };
}