const http = require('http');
const { getPersons, getStreets } = require('./db');

const host = 'localhost';
const port = 8000;

const server = http.createServer(async (reqest, response) => {
  response.writeHead(200);
  const [persons, streets] = await Promise.all([
    getPersons(),
    getStreets(),
  ]);
  //   const persons = await getPersons();
  //   const streets = await getStreets();
  response.end(JSON.stringify({ persons, streets }));
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
