"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const datalocator = __importStar(require("../dataConfig/applocators.json"));
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
const protractor_1 = require("protractor");
const utility_js_1 = require("../Utils/utility.js");
let utilobj = new utility_js_1.utlityconf();
var EC = protractor_1.protractor.ExpectedConditions;
class renameEQdetailed {
    constructor() {
        this.newEQcodecss = datalocator.WorkplantEQ_Renamecode.newQEcodecss;
        this.confirmYesbuttoncss = datalocator.WorkplantEQ_Renamecode.renameconfirm_yesbuttoncss;
        this.confirmNobuttoncss = datalocator.WorkplantEQ_Renamecode.renameconfirm_nobuttoncss;
        this.continuebtntxt = datalocator.WorkplantEQ_Renamecode.rename_continueBtntxt;
        this.newEQCode = protractor_1.element(protractor_1.by.css(this.newEQcodecss));
        this.Yesbutton = protractor_1.element(protractor_1.by.css(this.confirmYesbuttoncss));
        this.nobutton = protractor_1.element(protractor_1.by.css(this.confirmNobuttoncss));
        this.continuebutton = protractor_1.element(protractor_1.by.buttonText(this.continuebtntxt));
    }
    enternewEQcode(code) {
        protractor_1.browser.wait(EC.presenceOf(this.newEQCode), 60000);
        if (this.newEQCode.isDisplayed() && this.newEQCode.isEnabled()) {
            this.newEQCode.sendKeys(code);
        }
        winstonlogger_1.CustomLogger.logger.info("The new entered EQ code is " + code);
    }
    ;
    chooseconfirmResponse(response) {
        protractor_1.browser.wait(EC.presenceOf(this.Yesbutton), 50000);
        if (response == 'Y' || response == 'y') {
            if (this.Yesbutton.isDisplayed()) {
                this.Yesbutton.click();
            }
        }
        else {
            if (this.nobutton.isDisplayed()) {
                this.nobutton.click();
            }
        }
    }
    ;
    validateRename() {
        protractor_1.browser.wait(EC.presenceOf(this.continuebutton), 70000);
        utilobj.pressF3key();
        winstonlogger_1.CustomLogger.logger.info("Rename operation has been completed successfully");
    }
    ;
}
exports.renameEQdetailed = renameEQdetailed;
