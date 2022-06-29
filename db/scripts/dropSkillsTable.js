import { query } from "../index.js";

async function dropTable() {
  const res = await query(`DROP TABLE skills`);
  console.log(`skills table got smoked!`);
}

dropTable();
