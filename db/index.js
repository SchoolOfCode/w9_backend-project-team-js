import pg from "pg";
// import dotenv from "dotenv/config";

// export const pool = new pg.Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,

//   ssl: { rejectUnauthorized: false },
// });

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}
