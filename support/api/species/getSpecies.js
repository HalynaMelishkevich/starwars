const uri = 'species/';
exports.uri = uri;
exports.getSpecies = async () => {
    return request.get(uri).send();
};