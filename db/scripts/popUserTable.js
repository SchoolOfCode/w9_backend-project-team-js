import { query } from "../index.js";
import { user } from "../../libs/index.js";

const sqlString = `INSERT INTO userProfile(name, Bio, skillsGood, skillsBad) VALUES($1, $2, $3, $4) RETURNING *;`;

async function populateUserTable() {
  for (let i = 0; i < user.length; i++) {
    const params = [user[i].name, user[i].Bio, user[i].skillsGood, user[i].skillsBad];
    const res = await query(sqlString, params);

    console.log(res.rows[0].name, "Has been inserted");
  }
}
populateUserTable();
