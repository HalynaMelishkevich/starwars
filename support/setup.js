const chai = require('chai');
chai.use(require('chai-json-schema'));
chai.use(require('chai-json-equal'));
global.assert = chai.assert;
global.should = chai.should();

const request = require('supertest');
global.baseUrl = 'https://swapi.co/api/';
global.request = request(baseUrl);

global.retryCount = 2;
global.testData = require('../support/testData');

const { createLogger, format, transports } = require('winston');
global.logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'starwars' },
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'info.log' })
    ]
});
