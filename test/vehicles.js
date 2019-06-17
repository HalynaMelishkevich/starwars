const { getVehiclesSchema, schemaUri } = require('../support/api/vehicles/getVehiclesSchema');
const { getVehicles, uri } = require('../support/api/vehicles/getVehicles');
const vehiclesSchema = require('../support/schema/vehicles');

describe(`Tests for "vehicles" endpoint`, async () => {
    it(`@07 Should get correct /vehicles endpoint schema`, async () => {
        const result = await getVehiclesSchema();
        logger.log('info', `Response on ${schemaUri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(vehiclesSchema);
    });

    it(`@13 Response of /vehicles endpoint should correspond to expected schema`, async () => {
        const result = await getVehicles();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.body.results.forEach(vehiclesUnit => {
            assert.jsonSchema(vehiclesUnit, vehiclesSchema);
        });
    });
});