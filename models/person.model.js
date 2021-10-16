'use strict'

const { Model } = require('objection')

class Person extends Model {
  static get tableName() {
    return 'persons';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name'],
      properties: {
        id: { type: 'integer' },
        first_name : { type: ['string', null]},
        last_name: { type: ['string', null]},
      }
    }
  }
}

module.exports = Person