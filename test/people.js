const { getPeopleSchema, schemaUri } = require('../support/api/people/getPeopleSchema');
const { getPeople, uri } = require('../support/api/people/getPeople');
const peopleSchema = require('../support/schema/people');

describe(`Tests for "people" endpoint`, async () => {
    it(`@02 Should get correct /people endpoint schema`, async () => {
        const result = await getPeopleSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(peopleSchema);
    });

    it(`@08 Response of /people endpoint should correspond to expected schema`, async () => {
        const result = await getPeople();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(peopleUnit => {
            assert.jsonSchema(peopleUnit, peopleSchema);
        });
    });
});