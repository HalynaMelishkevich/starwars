const { getVehiclesSchema, uri } = require('../support/api/vehicles/getVehiclesSchema');
const vehiclesSchema = require('../support/schema/vehicles');

describe(`Tests for "vehicles" endpoint`, async () => {
    it(`@07 Should get correct /vehicles endpoint schema`, async () => {
        const result = await getVehiclesSchema();
        logger.log('info', `Response on ${uri} request: ${JSON.stringify(result)}`);

        result.status.should.equal(200);
        result.body.should.jsonEqual(vehiclesSchema);
    });
});