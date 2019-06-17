const { getSpeciesSchema, uri } = require('../support/api/Species/getSpeciesSchema');
const speciesSchema = require('../support/schema/species');

describe(`Tests for "species" endpoint`, async () => {
    it(`@05 Should get correct /species endpoint schema`, async () => {
        const result = await getSpeciesSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(speciesSchema);
    });
});