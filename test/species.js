const { getSpeciesSchema, schemaUri } = require('../support/api/species/getSpeciesSchema');
const { getSpecies, uri } = require('../support/api/species/getSpecies');
const speciesSchema = require('../support/schema/species');

describe(`Tests for "species" endpoint`, async () => {
    it(`@05 Should get correct /species endpoint schema`, async () => {
        const result = await getSpeciesSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(speciesSchema);
    });

    it(`@11 Response of /species endpoint should correspond to expected schema`, async () => {
        const result = await getSpecies();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(speciesUnit => {
            assert.jsonSchema(speciesUnit, speciesSchema);
        });
    });
});