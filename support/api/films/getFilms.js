const uri = 'films/';
exports.uri = uri;
exports.getFilms = async () => {
    return request.get(uri).send();
};