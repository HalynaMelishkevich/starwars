const uri = 'starships/';
exports.uri = uri;
exports.getStarships = async () => {
    return request.get(uri).send();
};