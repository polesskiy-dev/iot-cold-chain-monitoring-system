const yup = require('yup');

module.exports = yup.object().shape({
    username: yup.string().min(6).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
});