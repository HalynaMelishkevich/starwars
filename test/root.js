const { getAllEndpoints } = require('../support/api/root/getRoot');

describe(`Tests for base endpoint`, async () => {
    it(`@01 Should get correct endpoints information`, async () => {
        const result = await getAllEndpoints();
        logger.log('info', `Response on base URL request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        assert.deepEqual(testData.expectedEndpoints, result.body, `Incorrect expected endpoints list`);
    });
});