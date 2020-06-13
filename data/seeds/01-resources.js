
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { name: 'pen + paper'},
        { name: 'computer', description: "how else are you supposed to get those projects done" },
        { name: 'brain', description: 'dont forget it' }
      ]);
    });
};
