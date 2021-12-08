const pg = require('pg');
const dbString = require('./constants').dbstring;

const client = new pg.Client(dbString);

client.connect();

async function getPersons() {
  const result = await client.query('SELECT * FROM persons');
  return result.rows;
}

async function getStreets() {
  const result = await client.query('SELECT * FROM streets');
  return result.rows;
}

exports.getPersons = getPersons;
exports.getStreets = getStreets;
