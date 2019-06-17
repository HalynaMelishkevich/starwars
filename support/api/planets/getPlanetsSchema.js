const uri = 'planets/schema';
exports.schemaUri = uri;
exports.getPlanetsSchema = async () => {
    return request.get(uri).send();
};