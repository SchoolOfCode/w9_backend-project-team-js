[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8036224&assignment_repo_type=AssignmentRepo)

# Backend for Backpack App (W9 Project) 

This is the repo for our server and database, where we have built the API routes, postgresql queries and tests. Our API CRUD routes are connected to our database (Heroku) and the data is fed to our frond end via the GET routes.

## Description
Backpack is the name of our project and we were aiming to build a Social app with some productivity features (such as note taking and progress tracker).

## Features of MVP
- Read User details
- Create Skills and Goals
- Update Skills and Goals
- Delete Skills and Goals


[Link to Frontend](https://github.com/SchoolOfCode/w9_frontend-project-team-js)


## API Reference

#### PORT Used: 3001

#### User

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /user                |                 | all user                                  | { success: True, payload: User array }      |

#### Skills

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /skills              |                 | all skills                                | { success: True, payload: Skills array }    |
| POST   | /skills              | { body }        | create a new skill                        | { success: True, payload: new skills was added to database  } |
| PUT    | /skills/<skills_id>  | { body }        | updated skill by ID                       | { payload: recipe }       |
| DELETE | /skills/<skills_id>  |                 | delete skill by ID                            | { success: Boolean, payload: recipe }       |




## Tech Stack

**Database:** Heroku

**Server:** Node, Express, Jest, Nodemon, Supertest, pg




## Running Tests

To run tests, run the following command

```bash
  npm run test
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/SchoolOfCode/w9_backend-project-team-js
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```




## Authors

- [@Steven Cheung](https://github.com/StevenCK1)

- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)

- [@Adam Phasey](https://github.com/AdamPhasey)

- [@Skandog](https://github.com/skandog)







