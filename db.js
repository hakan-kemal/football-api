const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const db = new Sequelize(databaseUrl, { logging: false });

db.sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

console.log("Connected to db.js");

module.exports = db;
