const{ User, UserSchema } = require('./user.model');
const{ Customer, CustomerSchema } = require('./customer.model');
const{ Product, ProductSchema } = require('./producto.model');
const{ Category, CategorySchema } = require('./category.model');

// Aqui deberan estar todos los modelos
function setUpModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));

    // Indicamos que tablas tiene una relacion
    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
}

module.exports = setUpModels;