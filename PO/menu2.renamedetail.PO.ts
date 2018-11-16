import * as datalocator from "../dataConfig/applocators.json";
import { CustomLogger } from "../winstonsetup/winstonlogger";
import { element,by, protractor, browser } from "protractor";
import { utlityconf } from "../Utils/utility.js";

let utilobj=new utlityconf();
var EC=protractor.ExpectedConditions;

export class renameEQdetailed{

    newEQcodecss=(<any>datalocator).WorkplantEQ_Renamecode.newQEcodecss;
    confirmYesbuttoncss=(<any>datalocator).WorkplantEQ_Renamecode.renameconfirm_yesbuttoncss;
    confirmNobuttoncss=(<any>datalocator).WorkplantEQ_Renamecode.renameconfirm_nobuttoncss;
    continuebtntxt=(<any>datalocator).WorkplantEQ_Renamecode.rename_continueBtntxt;

    newEQCode=element(by.css(this.newEQcodecss));
    Yesbutton=element(by.css(this.confirmYesbuttoncss));
    nobutton=element(by.css(this.confirmNobuttoncss));
    continuebutton=element(by.buttonText(this.continuebtntxt));

    public enternewEQcode(code:string) {
        browser.wait(EC.presenceOf(this.newEQCode),60000);
        if (this.newEQCode.isDisplayed() && this.newEQCode.isEnabled()) {
            this.newEQCode.sendKeys(code);
        }
        CustomLogger.logger.info("The new entered EQ code is "+code);
    };

    public chooseconfirmResponse(response:string) {
        browser.wait(EC.presenceOf(this.Yesbutton),50000);
        if (response=='Y'|| response=='y') {
            if (this.Yesbutton.isDisplayed()) {
                this.Yesbutton.click();
            }
        } else {
            if (this.nobutton.isDisplayed()) {
                this.nobutton.click();
            }
        }
    };

    public validateRename() {
        browser.wait(EC.presenceOf(this.continuebutton),70000);
        utilobj.pressF3key();
        CustomLogger.logger.info("Rename operation has been completed successfully");
    };

}