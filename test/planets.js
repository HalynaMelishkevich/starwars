const { getPlanetsSchema, uri } = require('../support/api/planets/getPlanetsSchema');
const planetsSchema = require('../support/schema/planets');

describe(`Tests for "planets" endpoint`, async () => {
    it(`@04 Should get correct /planets endpoint schema`, async () => {
        const result = await getPlanetsSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(planetsSchema);
    });
});