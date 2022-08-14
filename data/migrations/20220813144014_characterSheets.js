/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("characterSheets", table => {
        table.increments("characterId").primary();
        table.string("characterName").notNullable();
        table.string("class").notNullable();
        table.string("level").notNullable();
        table.string("background").notNullable();
        table.string("playerName").notNullable();
        table.string("race").notNullable();
        table.string("augment")
        table.string("exp").notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("characterSheets")
};
