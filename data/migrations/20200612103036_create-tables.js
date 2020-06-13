exports.up = function (knex) {
    return knex.schema
      .createTable("projects", (tbl) => {
        tbl.increments();
  
        tbl.varchar("project_name", 128).notNullable();
        tbl.varchar("description", 255);
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("resources", (tbl) => {
        tbl.increments();
  
        tbl.varchar("name", 128).unique().notNullable();
        tbl.varchar("description", 255);
      })
      .createTable("tasks", (tble) => {
        tble.increments();
  
        tble.varchar("description", 255).notNullable();
        tble.varchar("notes", 510);
        tble.boolean('completed').defaultTo(false)
  
        tble
          .integer("project_id")
          .notNullable()
          .unsigned()
          .references("projects.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      .createTable("project_resources", (tbl) => {
        tbl.increments();
  
        tbl
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("projects.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
  
        tbl
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resources.id")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("project_resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects");
  };