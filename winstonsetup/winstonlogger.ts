import {createLogger, format, transports} from 'winston'

const { combine, timestamp, label,printf  } = format;
export class CustomLogger{
    public static myFormat = printf(info => {
        return `${info.timestamp} ${info.level}: ${info.message}`;
      });
    static logger = createLogger({
        level: 'info',
        format: combine(
            label({ label: 'right meow!' }),
            timestamp(),
            CustomLogger.myFormat
          ),
        transports: [
        // - Write to all logs with level `info` and above to `combined.log`
        new transports.File({ filename: 'Executionlogs.log'}),
        ]
    });
}