const db = require('../data/db-config')

module.exports = {
    get,
    add
  }

  function get(id) {
    if (id) {
      return db('resources')
        .where({ id })
        .first()
    } else {
      return db('resources')
    }
  }
  
  function add(resource) {
    return db('resources')
      .insert(resource)
      .then(id => {
        return get(id[0])
      })
  } 