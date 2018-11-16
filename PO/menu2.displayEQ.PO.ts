import *  as locatordata from "../dataconfig/appLocators.json";
import { element,by, browser,protractor} from "protractor";
import { CustomLogger } from "../winstonsetup/winstonlogger";

var EC=protractor.ExpectedConditions;

export class displayplantEQ{

    typecodeFilterfieldcss=(<any>locatordata).WorkplantEQ_DisplayEQ.typecodefiltercss;
    elementradiobtncss=(<any>locatordata).WorkplantEQ_DisplayEQ.elementradiobtncss;
    displaybtntext=(<any>locatordata).WorkplantEQ_DisplayEQ.displaybtntext;
    screenNamecss=(<any>locatordata).common.screenNamecss;

    typecodefilter=element(by.css(this.typecodeFilterfieldcss));
    elementradiobtn=element(by.css(this.elementradiobtncss));
    displaybtn=element(by.buttonText(this.displaybtntext));
    screenName=element(by.css(this.screenNamecss));

    public enterEQcode(code:string){
    if (this.typecodefilter.isDisplayed()) {
        this.typecodefilter.sendKeys(code);
    }
    CustomLogger.logger.info("The code entered for display reading "+code)
 };

   public clickElementradiobtn() {
     if (this.elementradiobtn.isDisplayed()) {
         this.elementradiobtn.click();
     }
 };
 
  public pressdisplaybutton() {
    if (this.displaybtn.isDisplayed() && this.displaybtn.isEnabled()) {
        this.displaybtn.click();
    }  
    CustomLogger.logger.info("Display plant EQ button has been pressed successfully");
    browser.wait(EC.presenceOf(this.screenName),50000);
    if (this.screenName.isDisplayed()) {
        CustomLogger.logger.info("Display operation has been completed successfully")
    }
  };

  //table.ui-table-scrollable-body-table tbody tr td:nth-child(5)>p-celleditor>div-css for value in reading value column
}