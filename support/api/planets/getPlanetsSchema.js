const uri = 'planets/schema';
exports.uri = uri;
exports.getPlanetsSchema = async () => {
    return request.get(uri).send();
};