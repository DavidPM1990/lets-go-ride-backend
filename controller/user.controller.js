const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { signJwt } = require('../utils/jwt.util');
let SALT = 10


const createUser = (req, res, next) => {
    const { email, password, username, phoneNumber } = req.body;
    UserModel.findOne({ email })
        .then((user) => {
            if (user) {
                throw new Error('Email ya en uso');
            }
            const saltBcrypt = bcrypt.genSaltSync(SALT);
            const hashBcrypt = bcrypt.hashSync(password, saltBcrypt);

            return UserModel.create({ email, password: hashBcrypt, username, phoneNumber });
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            if (err.message === 'Email ya en uso') {
                res.status(400).json({ errorMessage: err.message });
                return;
            }
            next(err);
        });
};


const findProfile = (req, res, next) => {
    const { username, password } = req.body;

    UserModel.findOne({ username })
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({ token: signJwt(user._id.toString(), user.username) });
            } else {
                res.status(400).json({ errorMessage: 'username o contraseña no valida.' });
            }
        })
        .catch(next);
};
// router.post("/login", (req, res, next) => {
//     const { username, password } = req.body
//     let user
//     userModel.findOne({ username })
//         .then((userDB) => {
//             user = userDB
//             return bcrypt.compare(password, user.password)
//         })
//         .then((isPassword) => {
//             console.log(isPassword)
//             if (isPassword) {
//                 req.session.user = user;
//                 res.render("auth/profile", req.session.user);
//             } else {
//                 res.render('auth/login', { message: 'Usuario o contraseña incorrecta!' });
//             }
//         })
//         .catch((err) => next(err));
// })

module.exports = { createUser, findProfile }


