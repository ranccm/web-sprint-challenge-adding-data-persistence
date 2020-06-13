
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'db1', description: "first database project"},
        { project_name: 'db2', description: "second database project"},
        { project_name: 'sprint', description: "weekly challenge"}
      ]);
    });
};
