import { query } from "../index.js";

let sqlStr =
  "CREATE TABLE IF NOT EXISTS skills (skillsId INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, title TEXT, star INTEGER, notes TEXT);";

async function createTable() {
  const res = await query(sqlStr);
  console.log(res);
  console.log(res.command, "Created Skills Table");
}

createTable();
