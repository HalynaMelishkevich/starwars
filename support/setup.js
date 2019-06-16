const chai = require('chai');
global.assert = chai.assert;
global.should = chai.should();

const request = require('supertest');
global.baseUrl = 'https://swapi.co/api/';
global.request = request(baseUrl);

global.retryCount = 2;
global.testData = require('../support/testData');
/**
 * Logging is done with winston library
 * Possible logging levels:
 * { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 * Passing the logLevel from command line. Use it like: logLevel=debug npm test
 * Default logLevel = error
 */
const winston = require('winston');
const logLevel = process.env.logLevel;
winston.level = logLevel || 'error';
global.logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: logLevel,
            prettyPrint: true,
            colorize: true,
            silent: false,
            timestamp: false
        }),
        new winston.transports.File({
            filename: './logs/' + Date.now() + '.log',
            level: 'debug',
            prettyPrint: true
        })
    ]
});
