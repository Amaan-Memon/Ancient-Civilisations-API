import {query, pool} from "../db/index"

export const getAllCivs = async () =>{
    const res = await pool.query(`SELECT * FROM ancientCivs ORDER BY id ASC;`)
    return res.rows;
}

export const getCivById = async () =>{
const res = await pool.query(`SELECT * FROM ancientCivs WHERE id = ($1);`, [id])
return res.rows;
}

export const addCiv = async (newCiv) =>{
    console.log(newCiv)
    const res = await pool.query(`INSERT INTO ancientCivs name, knownFor, duration, size, capital, famousRulers, religion, language ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [newCiv.name, newCiv.knownFor, newCiv.duration, newCiv.size, newCiv.capital, newCiv.famousRulers, newCiv.religion, newCiv.language]);
    console.log(`new ancient civilisation added, ${JSON.stringify(res.rows)}`);
    return res.rows;
  }
  
  //UPDATE (PUT) A ancientCiv
  export async function updateCiv(id, updatedCiv) {
    const res = await query(
    `UPDATE ancientCivs 
    SET name =($1), 
    knownFor=($2),
    duration=($3),
    size=($4),
    capital=($5),
    famousRulers=($6),
    religion=($7),
    language=($8)
    WHERE id=(${id}) RETURNING*;`,
    [updatedCiv.name , updatedCiv.knownFor, updatedCiv.duration, updatedCiv.size, updatedCiv.capital, updatedCiv.famousRulers, updatedCiv.religion, updatedCiv.language]
    );
    console.log(`Ancient Civilisation updated: ${JSON.stringify(res.rows)}`)
    return res.rows;
  }
  
  //DELETE A ancientCiv
  export async function deleteCiv(id) {
      const res = await query(`DELETE FROM ancientCivs 
      WHERE id=(${id}) RETURNING*;`);
      console.log(`Ancient Civilisation deleted: ${JSON.stringify(res.rows)}`)
      return res.rows;
    }
