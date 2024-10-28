import winston from 'winston';

const { createLogger, transports, format } = winston;

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(winston.format.colorize(), format.simple())
    })
  ]
});

export default logger;
