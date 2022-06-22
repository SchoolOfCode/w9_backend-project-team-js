import { query } from "../index.js";

let sqlStr =
  "CREATE TABLE IF NOT EXISTS goals (goalId INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, details TEXT, complete BOOLEAN, notes TEXT);";

async function createTable() {
  const res = await query(sqlStr);
  console.log(res);
  console.log(res.command, "Created goals Table");
}

createTable();
