import { query } from "../db/index.js";

export async function getUser() {
  let result = await query(`SELECT * FROM userProfile`);
  console.log(result.rows);
  return result.rows;
}

export async function getSkills() {
  let result = await query(`SELECT * FROM skills`);
  console.log(result.rows);
  return result.rows;
}

export async function getGoals() {
  let result = await query(`SELECT * FROM goals`);
  console.log(result.rows);
  return result.rows;
}
