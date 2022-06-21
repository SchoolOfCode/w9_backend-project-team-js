import { query } from "../db/index.js";

export async function getUser() {
  let result = await query(`SELECT * FROM userProfile`);
  console.log(result.rows);
  return result.rows;
}
