"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const locatordata = __importStar(require("../dataconfig/appLocators.json"));
const protractor_1 = require("protractor");
const winstonlogger_1 = require("../winstonsetup/winstonlogger");
class AddEQcode {
    constructor() {
        //element locators
        this.addplantEQcodecss = locatordata.WorkplantEQ_AddEQcode.EnterEQcodecss;
        //page objects
        this.addplantEQcode = protractor_1.element(protractor_1.by.css(this.addplantEQcodecss));
    }
    //public methods to perform operations on page objects
    enterAddEqcode(eqcode) {
        this.addplantEQcode.sendKeys(eqcode);
        winstonlogger_1.CustomLogger.logger.info("The entered plant EQ code is " + eqcode);
    }
    ;
}
exports.AddEQcode = AddEQcode;
