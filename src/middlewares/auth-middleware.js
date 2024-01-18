const auth = (req, res, next) => {

    if(!req.headers.authorization){
        res.status(401).send("Token necessário para acessar");
    }

    next();
}

module.exports = auth;