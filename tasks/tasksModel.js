const db = require("../data/db-config");

module.exports = {
    getTask,
    addTask
  };

// function getTask() {
//   return db("tasks").join("projects", "tasks.project_id", "projects.id" )
//   .where("projects.id")
//   .select("tasks.id", "tasks.description", "projects.project_name")
// }


function getTask(id) {
    if (id) {
    return db('tasks').join("projects", "tasks.project_id", "projects.id" )
      .where("projects.id", { id })
      .select('task.id', 'task.description as task', 'project.project_name as project')
  } else {
    return db('tasks')
  }}
  
  function addTask(task) {
    return db('tasks').insert(task).then(ids => {
      return getTask(ids[0])
    })
  }