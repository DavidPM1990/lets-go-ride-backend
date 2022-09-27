const jwt = require('jsonwebtoken');
const secret = process.env.SECRET

const signJwt = (idUser, email) => {
    return jwt.sign({ email }, secret, { expiresIn: '7d', subject: idUser });
};

const verifyJwt = (token) => {
    return jwt.verify(token, secret);
}

module.exports = {
    signJwt,
    verifyJwt
}