const uri = 'starships/schema';
exports.uri = uri;
exports.getStarshipsSchema = async () => {
    return request.get(uri).send();
};