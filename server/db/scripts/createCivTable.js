import { pool, query } from "../../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS Civs (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    knowFor TEXT,
    duration TEXT,
    size INT,
    capital TEXT,
    famousRulers TEXT,
    religion TEXT,
    language TEXT
);`;

async function createCivsTable () {
    const result = await query(sqlString);
    console.log("Created Ancient Civilisations table");
};

createCivsTable();

await pool.end();