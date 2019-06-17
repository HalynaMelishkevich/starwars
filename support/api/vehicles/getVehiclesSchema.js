const uri = 'vehicles/schema';
exports.uri = uri;
exports.getVehiclesSchema = async () => {
    return request.get(uri).send();
};