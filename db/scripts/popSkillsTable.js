import { query } from "../index.js";
import { skills } from "../../libs/index.js";

const sqlString = `INSERT INTO skills(title, star, notes) VALUES($1, $2, $3) RETURNING *;`;

async function populateSkillsTable() {
  for (let i = 0; i < skills.length; i++) {
    const params = [skills[i].title, skills[i].star, skills[i].notes];
    const res = await query(sqlString, params);

    console.log(res.rows[0].title, "Has been inserted");
  }
}
populateSkillsTable();