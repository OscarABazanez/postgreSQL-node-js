const{ User, UserSchema } = require('./user.model');
const{ Customer, CustomerSchema } = require('./customer.model');

// Aqui deberan estar todos los modelos
function setUpModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Customer.init(CustomerSchema, Customer.config(sequelize))

    // Indicamos que tablas tiene una relacion
    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
}

module.exports = setUpModels;