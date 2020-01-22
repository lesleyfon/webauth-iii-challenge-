const Knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const configOptions = require('./../knexfile')

module.exports = Knex(configOptions[environment])