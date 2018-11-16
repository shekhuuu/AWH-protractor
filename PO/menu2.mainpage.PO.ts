import *  as locatordata from "../dataconfig/appLocators.json";
import { element,by, protractor,browser } from "protractor";
import { CustomLogger} from "../winstonsetup/winstonlogger";

var EC=protractor.ExpectedConditions;
const maxtimeout=600000;

export class workplant_Displaypage{

    //element locators
    WorkplantEQDropdowncss=(<any>locatordata).WorkplantEQ_display.regioncodedropdowncss;
    WorkplantEQDropdownoptioncss=(<any>locatordata).WorkplantEQ_display.selectregionDropdowncss;
    WorkplantEQContinuebuttoncss=(<any>locatordata).common.continuebuttoncss;
    WorkplantEQpagetwolinktxt=(<any>locatordata).WorkplantEQ_display.gridpagenotwolinktxt;

    ///page elements
    WorkplantEQregioncodeDropdown=element(by.css(this.WorkplantEQDropdowncss));
    WorkplantEQregioncodedrpOption=element.all(by.css(this.WorkplantEQDropdownoptioncss));
    WorkplantEQDisplayContinuebutton=element(by.css(this.WorkplantEQContinuebuttoncss));
    WorkplantEQpagetwolink=element(by.linkText(this.WorkplantEQpagetwolinktxt));

    //public method to perform operations on page objects

    public clickRegioncodeDrp(){
      this.WorkplantEQregioncodeDropdown.click();
    };

    public selectRegionCode(regioncode:string){
    this.clickRegioncodeDrp();
    this.WorkplantEQregioncodedrpOption.each(function(option:any){
        option.getAttribute("ng-reflect-value").then(function(Actualregioncode:any){
            if (regioncode==Actualregioncode) {
                option.click();
                CustomLogger.logger.info("The Region code selected is "+Actualregioncode);
            }
        });
    });
 };

   public clickcontinuebutton(){
     this.WorkplantEQDisplayContinuebutton.click();
   };

   public checkgridload(){
    browser.wait(EC.visibilityOf(this.WorkplantEQpagetwolink),maxtimeout);
    CustomLogger.logger.info("The main page grid has been loaded");
   };

}