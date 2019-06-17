const { getFilmsSchema, schemaUri } = require('../support/api/films/getFilmsSchema');
const { getFilms, uri } = require('../support/api/films/getFilms');
const customRequest = require('supertest');
const filmsSchema = require('../support/schema/films');

describe(`Tests for "films" endpoint`, async () => {
    let filmsResponse;

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
        filmsResponse = result.body;
    });

    it(`@14 Should calculate films count correctly`, async () => {
        assert.deepEqual(filmsResponse.count, filmsResponse.results.length, `Films count is incorrectly calculated`);
    });

    it(`@15 Films entity should not have pagination`, async () => {
        assert.isNull(filmsResponse.next, `Next element is not null`);
        assert.isNull(filmsResponse.previous, `Previous element is not null`);
    });

    it(`@16 Films entities should have valid connections with people entities`, async () => {
        let charactersSet = new Set();
        filmsResponse.results.forEach(filmsUnit => {
            filmsUnit.characters.forEach(character => {
                charactersSet.add(character);
            });
        });

        const peopleLinkTemplate = /https:\/\/swapi.co\/api\/people\/\d+\//;
        charactersSet.forEach(async characterLink => {
            assert.isTrue(peopleLinkTemplate.test(characterLink), `Link to a character does not match expected template`);
            const response = await customRequest(characterLink).get('').send();
            response.status.should.equal(200);
        });
    });

    it(`@17 Each film entity should have unique identifier`, async () => {
        let linksSet = new Set();
        filmsResponse.results.forEach(filmsUnit => {
            linksSet.add(filmsUnit.url);
        });
        assert.deepEqual(linksSet.size, filmsResponse.count, `Films URLs are not unique.`);
    });
});