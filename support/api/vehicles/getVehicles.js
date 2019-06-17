const uri = 'vehicles/';
exports.uri = uri;
exports.getVehicles = async () => {
    return request.get(uri).send();
};