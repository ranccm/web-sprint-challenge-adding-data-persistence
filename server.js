const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');

const projectsRouter = require('./projects/projectsRouter.js');
const resourceRouter = require('./resources/resourcesRouter.js');
const tasksRouter = require('./tasks/tasksRouter')

const server = express();

server.use(helmet());
server.use(CORS());
server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.send(`<h1>API up</h1>`)
})

module.exports = server