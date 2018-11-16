import { CustomLogger } from "../winstonsetup/winstonlogger";
import *  as locatordata from "../dataConfig/appLocators.json";
import { browser,element,by,protractor } from "protractor";
var EC=protractor.ExpectedConditions;

export class editclick{

    typecodefiltercss=(<any>locatordata).WorkplantEQ_EditEQcode.filtertypecodecss;
    radiobuttoncss=(<any>locatordata).WorkplantEQ_EditEQcode.elementRadiobutton;
    editbtntext=(<any>locatordata).WorkplantEQ_EditEQcode.editbuttontxt;
    
    typecodefilter=element(by.css(this.typecodefiltercss));
    editbutton=element(by.buttonText(this.editbtntext));
    eleradiobutton=element(by.css(this.radiobuttoncss));

    public enterfiltercode(code:string){
      this.typecodefilter.sendKeys(code);
      CustomLogger.logger.info("The entered EQ code for editing is "+code)
    };

    public selectelement() {
        if (this.eleradiobutton.isDisplayed() && this.eleradiobutton.isEnabled()) {
            this.eleradiobutton.click();
        }
    };

    public presseditbutton(){
        browser.wait(EC.presenceOf(this.editbutton),50000);
        if(this.editbutton.isDisplayed() && this.editbutton.isEnabled()){
            this.editbutton.click();
        CustomLogger.logger.info("Edit plant EQ button pressed successfully");
        } 
    };

}