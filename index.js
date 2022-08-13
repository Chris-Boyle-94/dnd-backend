require('dotenv').config();

const port =  process.env.PORT;
const server = require('./api');

server.listen(port, () => console.log(`Listening on ${port}`));