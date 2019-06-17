const uri = 'starships/schema';
exports.schemaUri = uri;
exports.getStarshipsSchema = async () => {
    return request.get(uri).send();
};