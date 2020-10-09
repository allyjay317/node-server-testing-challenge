const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.get('/api/projects', (req, res) => {
  res.status(200).json({ works: true })
})

server.post('/api/projects', (req, res) => {
  const project = req.body
  res.status(201).json({ ...project, id: 1 })
})

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params
  if (id > 1) {
    res.status(404).json({ message: 'that id does not exist' })
  }
  else {
    res.status(204).end()
  }
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params
  if (id > 1) {
    res.status(404).json({ message: 'that id does not exist' })
  }
  else {
    res.status(200).json({
      name: "unit4 - sprint3 -module4",
      language: "javascript"
    })
  }
})

module.exports = server;