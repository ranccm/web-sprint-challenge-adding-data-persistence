
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { description: 'task one', project_id: 1 },
        { description: 'task two', project_id: 1 },
        { description: 'task one', project_id: 2 },
        { description: 'task two', project_id: 2 },
        { description: 'task one', project_id: 3 }
      ]);
    });
};
