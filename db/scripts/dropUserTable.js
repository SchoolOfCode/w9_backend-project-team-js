import { query } from "../index.js";

async function dropTable() {
  const res = await query(`DROP TABLE userProfile`);
  console.log(`userProfile table got smoked!`);
}

dropTable();
