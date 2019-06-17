const uri = 'films/schema';
exports.schemaUri = uri;
exports.getFilmsSchema = async () => {
    return request.get(uri).send();
};