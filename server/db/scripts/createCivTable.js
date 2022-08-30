import {query} from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS civs (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    knownFor TEXT,
    duration TEXT,
    size TEXT,
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

// await pool.end();
