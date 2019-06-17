const { getStarshipsSchema, schemaUri } = require('../support/api/starships/getStarshipsSchema');
const { getStarships, uri } = require('../support/api/starships/getStarships');
const starshipsSchema = require('../support/schema/starships');

describe(`Tests for "starships" endpoint`, async () => {
    it(`@06 Should get correct /starships endpoint schema`, async () => {
        const result = await getStarshipsSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(starshipsSchema);
    });

    it(`@12 Response of /starships endpoint should correspond to expected schema`, async () => {
        const result = await getStarships();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(starshipsUnit => {
            assert.jsonSchema(starshipsUnit, starshipsSchema);
        });
    });
});