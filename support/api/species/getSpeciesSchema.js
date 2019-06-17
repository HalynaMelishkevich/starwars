const uri = 'species/schema';
exports.schemaUri = uri;
exports.getSpeciesSchema = async () => {
    return request.get(uri).send();
};