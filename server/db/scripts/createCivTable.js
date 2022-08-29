import {query } from "../../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS civs (
    id  SERIAL PRIMARY,
    name TEXT,
    knowFor TEXT,
    duration TEXT,
    size INT,
    capital TEXT,
    famousRulers TEXT,
    religion TEXT,
    language TEXT
);`;

async function createCivsTable() {
  const result = await query(sqlString);
  console.log(`Created Ancient Civilisations table: ${result}`);
}

createCivsTable();

await pool.end();
