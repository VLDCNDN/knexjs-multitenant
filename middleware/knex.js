const Knex = require('knex');
const knexConfigs = require('../knexfile');
const { Person, Place } = require('../models');

function getKnexForRequest(tenantId, knexCache) {
  let knex = knexCache.get(tenantId);

  if(!knex) {
    knex = Knex(knexConfigForTenant(tenantId));
    knexCache.set(tenantId, knex);
  }

  return knex;
}

function knexConfigForTenant(tenantId) {
  return knexConfigs[tenantId];
}

const KnexConfig = (req, res, next) => {
  const { tenantId } = req.query;
  const knexCache = new Map();
  
  // Function that parses the tenant id from path, header, query parameter etc.
  // and returns an instance of knex. You should cache the knex instances and
  // not create a new one for each query. Knex takes care of connection pooling.
  const client = getKnexForRequest(tenantId, knexCache);
  const main = getKnexForRequest("main", knexCache);

  req.models = {
    Person: Person.bindKnex(main),
    Place: Place.bindKnex(client),
  };
  
  next(); 
};

module.exports ={
  KnexConfig,
};