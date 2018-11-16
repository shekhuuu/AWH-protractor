import * as datalocator from "../dataConfig/applocators.json";
import { element,by } from "protractor";
import { CustomLogger } from "../winstonsetup/winstonlogger.js";

export class renameclicked{

    typecodefilterbtncss=(<any>datalocator).WorkplantEQ_Renamecode.typecodefiltercss;
    elementradiobtncss=(<any>datalocator).WorkplantEQ_Renamecode.elementradiobuttoncss;
    renamebtntxt=(<any>datalocator).WorkplantEQ_Renamecode.renamebtntext;

    typecodefilter=element(by.css(this.typecodefilterbtncss));
    elementradiobtn=element(by.css(this.elementradiobtncss));
    renamebtn=element(by.buttonText(this.renamebtntxt));

    public fillcode (code:string) {
      this.typecodefilter.sendKeys(code);
      CustomLogger.logger.info("The entered EQ code for renaming is "+code);  
    };

    public clickelement() {
        if (this.elementradiobtn.isDisplayed() && this.elementradiobtn.isEnabled()) {
            this.elementradiobtn.click();
        }
    };

    public pressrenamebutton() {
        if (this.renamebtn.isDisplayed() && this.renamebtn.isEnabled()) {
            this.renamebtn.click();
            CustomLogger.logger.info("Rename plant EQ button pressed successfully");
        }
    };
}