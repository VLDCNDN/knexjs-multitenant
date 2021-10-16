'use strict'

const { Model } = require('objection')

class Place extends Model {
  static get tableName() {
    return 'places';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name : { type: ['string', null]},
      }
    }
  }
}

module.exports = Place