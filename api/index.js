// const path = require('path');
const express = require('express');
const cors = require('cors');

const characterSheetRouter = require('./character-sheet/character-sheet-router');
const server = express();

server.use(express.json());
server.use(cors());

server.use('/character-sheet', characterSheetRouter);

server.get('/', (req, res) => res.json({ message: 'Up' }));

module.exports = server;