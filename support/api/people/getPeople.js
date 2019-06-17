const uri = 'people/';
exports.uri = uri;
exports.getPeople = async () => {
    return request.get(uri).send();
};