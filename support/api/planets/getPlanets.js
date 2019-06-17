const uri = 'planets/';
exports.uri = uri;
exports.getPlanets = async () => {
    return request.get(uri).send();
};