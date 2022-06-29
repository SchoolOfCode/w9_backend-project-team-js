import { query } from "../index.js";

async function dropTable() {
  const res = await query(`DROP TABLE goals`);
  console.log(`goals table got smoked!`);
}

dropTable();
