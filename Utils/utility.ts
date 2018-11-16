import { browser,element,by, protractor } from "protractor";
import *  as locatordata from "../dataconfig/appLocators.json";
import { CustomLogger } from "../winstonsetup/winstonlogger";

export class utlityconf{

  //element locators  
  EQmenucss=(<any>locatordata).mainpage.EQmenucss;
  EQmenuheadingcss=(<any>locatordata).common.pageheadingcss;
  EQmenutwocss=(<any>locatordata).menupage.Menutwolinkcss;
  ScreenNamecss=(<any>locatordata).common.screenNamecss;
  EQmenuthreecss=(<any>locatordata).menupage.Menuthreelinkcss;

   //page elements
  EQmenulink=element(by.css(this.EQmenucss));
  EQmenuheading=element(by.css(this.EQmenuheadingcss));
  EQmenutwolink=element(by.css(this.EQmenutwocss));
  ScreenName=element(by.css(this.ScreenNamecss));
  EQmenuthreelink=element(by.css(this.EQmenuthreecss));

   //common function to be used for all add/edit/display etc
    public launchurl(url:string){
        browser.get(url);
    };

    //public methods to perform operations on page objects

    public verifyMainpagetitle(expectedtitle:string){
    browser.getTitle().then(function(title){
    expect(title).toContain(expectedtitle);
    CustomLogger.logger.info("The title of main page which is verified is "+expectedtitle);
    });
  };

    public clickEQmenu(){
    if(this.EQmenulink.isDisplayed() && this.EQmenulink.isEnabled()){
      this.EQmenulink.click();
    }
  };

    public verifyPageheading(expectedheadingtxt:string){
    this.EQmenuheading.getText().then(function(actualheadingtext:any){
     expect(actualheadingtext).toBe(expectedheadingtxt);
     CustomLogger.logger.info("The heading verified on page is "+expectedheadingtxt);
   });
 };

 public VerifyScreenName(expectedscreenName:string){
   this.ScreenName.getText().then(function(actualscreenName:any){
     expect(expectedscreenName).toContain(actualscreenName);
     CustomLogger.logger.info("The screen name verified is "+expectedscreenName);
   });
 }

    public clickEQmenutwolink(){
     if(this.EQmenutwolink.isDisplayed() && this.EQmenutwolink.isEnabled()){
         this.EQmenutwolink.click();
         CustomLogger.logger.info("Menu option 2 clicked");
     }
  };

  public clickEQmenuthreelink() {
    if (this.EQmenuthreelink.isDisplayed() && this.EQmenuthreelink.isEnabled()) {
      this.EQmenuthreelink.click();
      CustomLogger.logger.info("Menu option 3 clicked");
    }
  };

   public pressF6key(){
    browser.actions().sendKeys(protractor.Key.F6).perform();
  };

  public pressEnterKey(){
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  };

  
  public pressF3key() {
   browser.actions().sendKeys(protractor.Key.F3).perform();
  };

}