const db = require("../data/db-config");

module.exports = {
  getProject,
  addProject,
};

function getProject(id) {
  if (id) {
    return db("projects").where({ id }).first();
  } else {
    return db("projects");
  }
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then((id) => {
      return getProject(id[0]);

    });
}

// function getTasks(id) {
//   return db("tasks").join("projects", "tasks.project_id", "projects.id" )
//   .where("projects.id", id)
//   .select("tasks.id", "tasks.description", "projects.project_name")
// }


