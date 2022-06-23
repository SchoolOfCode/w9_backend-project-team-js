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
  test("GET request from /skills", async () => {
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
});

describe(`testing the goals route`, () => {
  test("GET request from /goals", async () => {
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
});

describe(`testing the user route`, () => {
  test("GET request from /user", async () => {
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
