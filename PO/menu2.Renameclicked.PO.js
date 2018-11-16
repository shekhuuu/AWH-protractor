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
const protractor_1 = require("protractor");
const winstonlogger_js_1 = require("../winstonsetup/winstonlogger.js");
class renameclicked {
    constructor() {
        this.typecodefilterbtncss = datalocator.WorkplantEQ_Renamecode.typecodefiltercss;
        this.elementradiobtncss = datalocator.WorkplantEQ_Renamecode.elementradiobuttoncss;
        this.renamebtntxt = datalocator.WorkplantEQ_Renamecode.renamebtntext;
        this.typecodefilter = protractor_1.element(protractor_1.by.css(this.typecodefilterbtncss));
        this.elementradiobtn = protractor_1.element(protractor_1.by.css(this.elementradiobtncss));
        this.renamebtn = protractor_1.element(protractor_1.by.buttonText(this.renamebtntxt));
    }
    fillcode(code) {
        this.typecodefilter.sendKeys(code);
        winstonlogger_js_1.CustomLogger.logger.info("The entered EQ code for renaming is " + code);
    }
    ;
    clickelement() {
        if (this.elementradiobtn.isDisplayed() && this.elementradiobtn.isEnabled()) {
            this.elementradiobtn.click();
        }
    }
    ;
    pressrenamebutton() {
        if (this.renamebtn.isDisplayed() && this.renamebtn.isEnabled()) {
            this.renamebtn.click();
            winstonlogger_js_1.CustomLogger.logger.info("Rename plant EQ button pressed successfully");
        }
    }
    ;
}
exports.renameclicked = renameclicked;
