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

// create new skill
export async function createSkill(newSkill) {
  const sqlString = `INSERT INTO skills(title, star, notes) VALUES($1, $2, $3) RETURNING *;`;

  for (let i = 0; i < newSkill.length; i++) {
    const params = [newSkill[i].title, newSkill[i].star, newSkill[i].notes];
    const res = await query(sqlString, params);

    console.log(res.rows[0].title, "Has been inserted");
  }

  // moved responseObject here since API response was wrongly showing previous array (before push)
  const responseObject = {
    success: true,
    payload: `new skills was added to database`,
  };

  return responseObject;
}

// create new goal
export async function createGoal(newGoal) {
  const sqlString = `INSERT INTO goals (details, complete, notes) VALUES($1, $2, $3) RETURNING *;`;

  for (let i = 0; i < newGoal.length; i++) {
    const params = [newGoal[i].details, newGoal[i].complete, newGoal[i].notes];
    const res = await query(sqlString, params);

    console.log(res.rows[0].title, "Has been inserted");
  }

  // moved responseObject here since API response was wrongly showing previous array (before push)
  const responseObject = {
    success: true,
    payload: `new goals was added to database`,
  };

  return responseObject;
}
