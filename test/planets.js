const { getPlanetsSchema, schemaUri } = require('../support/api/planets/getPlanetsSchema');
const { getPlanets, uri } = require('../support/api/planets/getPlanets');
const planetsSchema = require('../support/schema/planets');

describe(`Tests for "planets" endpoint`, async () => {
    it(`@04 Should get correct /planets endpoint schema`, async () => {
        const result = await getPlanetsSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(planetsSchema);
    });

    it(`@10 Response of /planets endpoint should correspond to expected schema`, async () => {
        const result = await getPlanets();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(planetsUnit => {
            assert.jsonSchema(planetsUnit, planetsSchema);
        });
    });
});