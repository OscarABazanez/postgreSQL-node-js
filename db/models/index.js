const{ User, UserSchema } = require('./user.model');

// Aqui deberan estar todos los modelos
function setUpModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
}

module.exports = setUpModels;