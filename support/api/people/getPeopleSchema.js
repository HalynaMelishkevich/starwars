const uri = 'people/schema';
exports.uri = uri;
exports.getPeopleSchema = async () => {
    return request.get(uri).send();
};