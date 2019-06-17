const uri = 'people/schema';
exports.schemaUri = uri;
exports.getPeopleSchema = async () => {
    return request.get(uri).send();
};