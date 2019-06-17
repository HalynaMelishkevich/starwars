const uri = 'species/schema';
exports.uri = uri;
exports.getSpeciesSchema = async () => {
    return request.get(uri).send();
};