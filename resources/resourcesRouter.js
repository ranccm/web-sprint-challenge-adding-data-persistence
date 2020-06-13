const router = require('express').Router();

const Resources = require('./resourcesModel')

router.get('/', (req, res) => {
  Resources.get()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to retrieve projects' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Resources.get(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to retrieve project' })
    })
})

router.post('/', (req, res) => {
  const resource = req.body
  Resources.add(resource)
    .then(resource => {
      res.status(201).json({ message: 'successfully added resource', resource: resource })
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to add new resource' })
    })
})

module.exports = router