const uri = 'films/schema';
exports.uri = uri;
exports.getFilmsSchema = async () => {
    return request.get(uri).send();
};