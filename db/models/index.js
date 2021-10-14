const{ User, UserSchema } = require('./user.model');
const{ Customer, CustomerSchema } = require('./customer.model');
const{ Product, ProductSchema } = require('./product.model');
const{ Category, CategorySchema } = require('./category.model');
const{ Order, OrderSchema } = require('./order.model');
const{ OrderProduct, OrderProductSchema } = require('./order-product.models');

// Aqui deberan estar todos los modelos
function setUpModels(sequelize){
    User.init(UserSchema, User.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    // Indicamos que tablas tiene una relacion
    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
}

module.exports = setUpModels;