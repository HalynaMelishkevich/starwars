const { getFilmsSchema, schemaUri } = require('../support/api/films/getFilmsSchema');
const { getFilms, uri } = require('../support/api/films/getFilms');
const filmsSchema = require('../support/schema/films');

describe(`Tests for "films" endpoint`, async () => {
    it(`@03 Should get correct /films endpoint schema`, async () => {
        const result = await getFilmsSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(filmsSchema);
    });

    it(`@09 Response of /films endpoint should correspond to expected schema`, async () => {
        const result = await getFilms();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(filmsUnit => {
            assert.jsonSchema(filmsUnit, filmsSchema);
        });
    });
});