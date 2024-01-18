require("dotenv").config();

const isProduction = (req, res, next) => {

    if(process.env.PRODUCTION == 1){
        res.status(403).send("Acesso proibido");
    }

    next();
}

module.exports = isProduction;