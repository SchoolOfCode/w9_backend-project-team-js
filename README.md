[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8036224&assignment_repo_type=AssignmentRepo)
# Backend for Backpack App (W9 Project) 



## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




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

PORT Used: 3001


## Documentation

[Jest](https://jestjs.io/docs/getting-started)

[PG](https://node-postgres.com/)

[Express](https://expressjs.com/)

[Nodemon](https://www.npmjs.com/package/nodemon)

[Supertest](https://www.npmjs.com/package/supertest)


## Authors

- [@Steven Cheung](https://github.com/StevenCK1)

- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)

- [@Adam Phasey](https://github.com/AdamPhasey)

- [@Skandog](https://github.com/skandog)







