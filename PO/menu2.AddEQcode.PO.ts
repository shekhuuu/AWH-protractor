import *  as locatordata from "../dataconfig/appLocators.json";
import { element,by } from "protractor";
import { CustomLogger } from "../winstonsetup/winstonlogger";


export class AddEQcode{

    //element locators

    addplantEQcodecss=(<any>locatordata).WorkplantEQ_AddEQcode.EnterEQcodecss;

    //page objects

    addplantEQcode=element(by.css(this.addplantEQcodecss));

    //public methods to perform operations on page objects

    public enterAddEqcode(eqcode:string){
     this.addplantEQcode.sendKeys(eqcode);
     CustomLogger.logger.info("The entered plant EQ code is "+eqcode);
    };
}