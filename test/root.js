const { getAllEndpoints } = require('../support/api/root/getRoot');

describe(`Tests for base endpoint`, async () => {
    it(`@01 Should get correct number of endpoints`, async () => {
        allure.feature('Root');
        const result = await getAllEndpoints();
        logger.log('info', `Response on base URL request:\n${JSON.stringify(result)}`);

        result.status.should.equal(200);
        assert.deepEqual(testData.expectedEndpoints.length, result.body.length, `Number of endpoints should be ${testData.expectedEndpoints.length}`);
    });
});