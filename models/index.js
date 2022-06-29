import { query } from "../db/index.js";

// Read user 
export async function getUser() {
  let result = await query(`SELECT * FROM userProfile`);
  return result.rows;
}

// Read skills
export async function getSkills() {
  let result = await query(`SELECT * FROM skills`);
  return result.rows;
}

// Read goals
export async function getGoals() {
  let result = await query(`SELECT * FROM goals`);
  return result.rows;
}

// create new skill
export async function createSkill(newSkill) {
  const sqlString = `INSERT INTO skills(title, star, notes) VALUES($1, $2, $3) RETURNING *;`;

  for (let i = 0; i < newSkill.length; i++) {
    const params = [newSkill[i].title, newSkill[i].star, newSkill[i].notes];
    const res = await query(sqlString, params);

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

  }

  // moved responseObject here since API response was wrongly showing previous array (before push)
  const responseObject = {
    success: true,
    payload: `new goals was added to database`,
  };

  return responseObject;
}

// udpate boolean for complete column
export async function updateGoal(id, body) {
  let result = await query(
    `UPDATE goals
    SET details = $1,
        complete = $2,
        notes = $3
    WHERE goalId = $4
    RETURNING *;`,
    [body.details, body.complete, body.notes, id]
  );
  console.log(result);
  let responseObject = {
    success: true,
    message: "You've updated a goal",
    payload: result.rows,
  };
  return responseObject;
}

// udpate skill from db
export async function updateSkill(id, body) {
  let result = await query(
    `UPDATE skills
        SET title = $1,
        star = $2,
        notes = $3
    WHERE skillsId = $4
    RETURNING *;`,
    [body.title, body.star, body.notes, id]
  );
  let responseObject = {
    success: true,
    message: "You've updated a skill",
    payload: result.rows,
  };
  return responseObject;
}

// Delete skills from db
export async function deleteSkillById(id) {
  const result = await query(
    `DELETE FROM skills WHERE skillsId = ${id} RETURNING * ;`
  );

  return result;
}

// Delete Goal from db

export async function deleteGoalById(id) {
  const result = await query(
    `DELETE FROM goals WHERE goalId = ${id} RETURNING * ;`
  );

  return result;
}
