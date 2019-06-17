const { getFilmsSchema, uri } = require('../support/api/films/getFilmsSchema');
const filmsSchema = require('../support/schema/films');

describe(`Tests for "films" endpoint`, async () => {
    it(`@03 Should get correct /films endpoint schema`, async () => {
        const result = await getFilmsSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(filmsSchema);
    });
});