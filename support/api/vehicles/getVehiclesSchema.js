const uri = 'vehicles/schema';
exports.schemaUri = uri;
exports.getVehiclesSchema = async () => {
    return request.get(uri).send();
};