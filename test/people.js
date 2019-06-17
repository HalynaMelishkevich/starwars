const { getPeopleSchema, uri } = require('../support/api/people/getPeopleSchema');
const peopleSchema = require('../support/schema/people');

describe(`Tests for "people" endpoint`, async () => {
    it(`@02 Should get correct /people endpoint schema`, async () => {
        const result = await getPeopleSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(peopleSchema);
    });
});