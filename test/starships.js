const { getStarshipsSchema, uri } = require('../support/api/starships/getStarshipsSchema');
const starshipsSchema = require('../support/schema/Starships');

describe(`Tests for "starships" endpoint`, async () => {
    it(`@06 Should get correct /starships endpoint schema`, async () => {
        const result = await getStarshipsSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(starshipsSchema);
    });
});