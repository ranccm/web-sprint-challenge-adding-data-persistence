const router = require('express').Router();

const Projects = require('./projectsModel');

router.get('/', (req, res) => {
  Projects.getProject()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to retrieve projects' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  Projects.getProject(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to retrieve project' })
    })
})

// router.get('/:id/tasks', (req, res) => {
//   const { id } = req.params;
//   Projects.getTask(id)
//   .then(tasks => {
//     if (tasks.length) {
//       res.json(tasks);
//     } else {
//       res.status(404).json({ message: 'Could not find tasks for given scheme' })
//     }
//   })
//   .catch(err => {
//     console.log(err)
//     res.status(500).json({ message: 'Failed to get tasks' });
//   });
// });

router.post('/', (req, res) => {
  const project = req.body
  Projects.addProject(project)
    .then(project => {
      res.status(201).json({ message: 'successfully added project', project: project })
    })
    .catch(() => {
      res.status(500).json({ message: 'failed to add new project' })
    })
})


// router.get('/:id/tasks', (req, res) => {
//   const { id } = req.params;
//   Projects.get(id)
//       .then(project => {
//           Projects.getTasks(id)
//               .then(tasks => {
//                   project.tasks = tasks;
//                   res.status(200).json(project);
//               })
//               .catch(() => {
//                   res.status(500).json({ message: "can't find those tasks" })
//               })
//       })
//       .catch(() => {
//           res.status(500).json({ message: 'failed to retrieve tasks' })
//       });
// })



// router.post('/:id/tasks', (req, res) => {
//   const taskData = req.body;
//   const { id } = req.params; 

//   Projects.getProject(id)
//   .then(project => {
//     if (project) {
//       Projects.addTask(taskData)
//       .then(task => {
//         res.status(201).json(task);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new task' });
//   });
// });

// router.post('/:id/tasks', (req, res) => {
//   const task = req.body
//       Projects.addTask(task)
//           .then(task => {
//             res.status(201).json(task)
//           })
//           .catch(error => {
//               res.status(500).json({ message: "failed to add task" })
//           })
// })





module.exports = router