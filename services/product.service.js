const boom = require('@hapi/boom');
const { query } = require('express');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor() {
  }


  async create(data) {
    const products = await models.Product.create(data)
    return products;
  }

  async find(query) {
    const options = {
      include: ['category'],
    };
    const { limit, offset } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product){
      throw boom.notFound('product not found')
    }
    return product
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }

}

module.exports = ProductsService;
