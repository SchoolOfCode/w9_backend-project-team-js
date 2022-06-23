import request from "supertest";
import app from "../app.js";
import { pool, query } from "../db/index.js";

beforeAll((done) => {
  done();
});
afterAll((done) => {
  // Closing the DB connection allows Jest to exit successfully.
  pool.end();
  done();
});

describe(`testing the skills route`, () => {
  test("GET request from /skills status code", async () => {
    let response = await request(app)
      .get("/skills")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
  });

  test("GET request from /skills returns correct header", async () => {
    let response = await request(app)
      .get("/skills")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
  });
  test("GET request from /skills returns the desired object", async () => {
    let response = await request(app)
      .get("/skills")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // whole skills data
    let expected = [
      {
        skillsid: expect.any(Number),
        title: expect.any(String),
        notes: expect.any(String),
        star: expect.any(Number),
      },
    ];
    expect(response.body).toMatchObject({
      success: true,
      payload: expect.arrayContaining(expected),
    });
  });

  test("POST request from /skills", async function () {
    let response = await request(app)
      .post("/skills")
      .send([{ title: "TESTname", star: 3, notes: "" }])
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // posted data
    let expected = { skillsid: expect.any(Number), title: "TESTname" };
    expect(response.body).toMatchObject({
      success: true,
      payload: "new skills was added to database",
    });
  });

  test("DELETE request from /skills/2", async function () {
    let response = await request(app)
      .delete("/skills/2")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    //  deleted data
    let expected = { skillsid: 2, details: expect.any(String) };
    expect(response.body).toMatchObject({
      success: true,
      payload: `The skills with id: 2 has been deleted`,
    });
  });
});

describe(`testing the goals route`, () => {
  test("GET request from /goals status code", async () => {
    let response = await request(app)
      .get("/goals")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
  });
  test("GET request from /goals returns correct headers", async () => {
    let response = await request(app)
      .get("/goals")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
  });

  test("GET request from /goals returns desired object", async () => {
    let response = await request(app)
      .get("/goals")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // whole skills data
    let expected = [
      {
        goalid: expect.any(Number),
        details: expect.any(String),
        notes: expect.any(String),
        complete: expect.any(Boolean),
      },
    ];
    expect(response.body).toMatchObject({
      success: true,
      payload: expect.arrayContaining(expected),
    });
  });

  test("POST request from /goals", async function () {
    let response = await request(app)
      .post("/goals")
      .send([{ details: "TESTname", complete: false, notes: "" }])
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // posted data
    let expected = { goalsid: expect.any(Number), title: "TESTname" };
    expect(response.body).toMatchObject({
      success: true,
      payload: "new goals was added to database",
    });
  });

  test("DELETE request from /goals/2", async function () {
    let response = await request(app)
      .delete("/skills/2")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    //  deleted data
    let expected = { skillsid: 2, details: expect.any(String) };
    expect(response.body).toMatchObject({
      success: true,
      payload: `The skills with id: 2 has been deleted`,
    });
  });
});

describe(`testing the user route`, () => {
  test("GET request from /user status code", async () => {
    let response = await request(app)
      .get("/user")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
  });
  test("GET request from /user shows correct header", async () => {
    let response = await request(app)
      .get("/user")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
  });
  test("GET request from /user returns the correct object", async () => {
    let response = await request(app)
      .get("/user")
      .set("Accept", "application/json");
    // HTTP response code;
    expect(response.status).toBe(200);
    // content type;
    expect(response.header).toEqual(
      expect.objectContaining({
        "content-type": expect.stringContaining("application/json"),
      })
    );
    // whole skills data
    let expected = [
      {
        userid: expect.any(Number),
        name: expect.any(String),
        bio: expect.any(String),
        imagesrc: expect.any(String),
        skillsgood: expect.any(String),
        skillsbad: expect.any(String),
      },
    ];
    expect(response.body).toMatchObject({
      success: true,
      payload: expect.arrayContaining(expected),
    });
  });
});
