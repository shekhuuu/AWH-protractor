"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, label, printf } = winston_1.format;
class CustomLogger {
}
CustomLogger.myFormat = printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`;
});
CustomLogger.logger = winston_1.createLogger({
    level: 'info',
    format: combine(label({ label: 'right meow!' }), timestamp(), CustomLogger.myFormat),
    transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new winston_1.transports.File({ filename: 'Executionlogs.log' }),
    ]
});
exports.CustomLogger = CustomLogger;
