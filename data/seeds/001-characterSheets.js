/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const data = [
    {
        characterName: "Orsik Bronzebeard",
        class: "Cleric",
        level: "1",
        background: "Folk Hero",
        playerName: "Chris",
        race: "Dwarf",
        augment: "idrk",
        exp: "0"
    }
]

exports.seed = (knex) => knex("characterSheets").del().then(() => {
    return knex("characterSheets").insert(data)
})
