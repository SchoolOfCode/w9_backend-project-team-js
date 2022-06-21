import { query } from "../index.js";

let sqlStr =
  "CREATE TABLE IF NOT EXISTS userProfile (userId INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, bio TEXT, skillsGood TEXT, skillsBad TEXT);";

async function createTable() {
  const res = await query(sqlStr);
  console.log(res);
  console.log(res.command, "Created User Table");
}

createTable();
