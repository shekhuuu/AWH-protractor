import { CustomLogger } from "../winstonsetup/winstonlogger";
import * as locatordata from "../dataConfig/appLocators.json";
import { element, by, browser } from "protractor";
import { protractor } from "protractor/built/ptor";
var EC=protractor.ExpectedConditions;

export class menu3main{

    //page locators
    readingdatecssval=(<any>locatordata).BuildEQ_mainpage.readingdatecss;
    centercodename=(<any>locatordata).BuildEQ_mainpage.centrecodename;
    paragraphtextcss=(<any>locatordata).BuildEQ_mainpage.paratextcss;
    yesbuttoncss=(<any>locatordata).BuildEQ_mainpage.Yesbuttoncss;
    nobuttoncss=(<any>locatordata).BuildEQ_mainpage.Nobuttoncss;
    dateErrorcss=(<any>locatordata).BuildEQ_mainpage.WrongDatemsgcss;
    Errorcss=(<any>locatordata).BuildEQ_mainpage.Errormsgcss;

    //page elements

    readingdate=element(by.css(this.readingdatecssval));
    centercode=element(by.name(this.centercodename));
    paratext=element(by.css(this.paragraphtextcss));
    Yesbutton=element(by.css(this.yesbuttoncss));
    Nobutton=element(by.css(this.nobuttoncss));
    dateError=element(by.css(this.dateErrorcss));
    Errormsg=element(by.css(this.Errorcss));

    
    public enterReadingDate(reading:string) {
        if (this.readingdate.isDisplayed() && this.readingdate.isEnabled()) {
            this.readingdate.clear();
            this.readingdate.sendKeys(reading);
            CustomLogger.logger.info("The entered Reading date is "+reading);
        }
    };

    public entercentercode(ccode:string) {
        if (this.centercode.isDisplayed() && this.centercode.isEnabled()) {
            this.centercode.clear();
            this.centercode.sendKeys(ccode);
            CustomLogger.logger.info("The entered center code is "+ccode);
        }
    };

    
    public verifyprinterText() {
        if (this.paratext.isDisplayed() && this.paratext.isEnabled()) {
            CustomLogger.logger.info("The paragraph text on menu three main page has been validated")
        }
    };

    public enterconfirmresponse(response:string){

        browser.wait(EC.presenceOf(this.Yesbutton),50000);
        if(response=='Y'|| response=='y'){
            if (this.Yesbutton.isEnabled()) {
                this.Yesbutton.click();
            }
        }
        else
        {
            if(this.Nobutton.isEnabled()){
                this.Nobutton.click();
            }
        }


    };

    public validateDaterror(Errormsg:string) {
        if (this.dateError.isDisplayed()) {
            this.dateError.getText().then(function(text){
                expect(text).toContain(Errormsg);
            });
        }

        CustomLogger.logger.info("Date Error message "+Errormsg+" has been validated successfully");
    };

    public validateErrormesage(vmsg:string) {

        if (this.Errormsg.isSelected()) {
            this.Errormsg.getText().then(function(text){
              expect(text).toContain(vmsg);
            });
        }

        CustomLogger.logger.info("Validation Error message "+vmsg+" has been validated successfully");
    };
}