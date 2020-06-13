const db = require("../data/db-config");

module.exports = {
    getTask,
    addTask
  };


function getTask(id) {
    if (id) {
    return db('tasks')
      .where({ id })
      .first
  } else {
    return db('tasks')
  }}
  
  function addTask(task) {
    return db('tasks').insert(task).then(ids => {
      return getTask(ids[0])
    })
  }