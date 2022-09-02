import { query } from "../index.js";
import { goals } from "../../libs/index.js";

const sqlString = `INSERT INTO goals (details, complete, notes) VALUES($1, $2, $3) RETURNING *;`;

async function populateGoalsTable() {
  for (let i = 0; i < goals.length; i++) {
    const params = [goals[i].details, goals[i].complete, goals[i].notes];
    const res = await query(sqlString, params);

    console.log(res.rows[0].details, "Has been inserted");
  }
}
populateGoalsTable();
