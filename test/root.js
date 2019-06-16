const { getAllEndpoints } = require('../support/api/root/getRoot');

describe(`Tests for base endpoint`, async () => {
    it(`@01 Should get correct number of endpoints`, async () => {
        const result = await getAllEndpoints();
        logger.log(result.body);
        result.status.should.equal(200);
        assert.deepEqual(testData.expectedEndpoints.length, result.body.length, `Number of endpoints should be ${testData.expectedEndpoints.length}`);
    });
});