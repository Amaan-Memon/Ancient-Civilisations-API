import { pool, query } from "../../index.js";

import { ancientCivs } from "../../libs/ancientCivs.js";

const populateCivsTable = async () => {
  for (let i = 0; i < ancientCivs.length; i++) {
    const result = await query(
      `INSERT INTO ancientCivs(name, knownFor, duration, size, capital, famousRulers, religion, language ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        ancientCivs[i].name,
        ancientCivs[i].knownFor,
        ancientCivs[i].duration,
        ancientCivs[i].size,
        ancientCivs[i].capital,
        ancientCivs[i].famousRulers,
        ancientCivs[i].religion,
        ancientCivs[i].language,
      ]
    );
    console.log(`${ancientCivs[i].name} added to DB and this is the result: ${result}`);
  }
};

populateCivsTable();
