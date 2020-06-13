const router = require("express").Router();

const Tasks = require("./tasksModel");

router.get("/", (req, res) => {
  Tasks.getTask()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(() => {
      res.status(500).json({ message: "failed to retrieve tasks" });
    });
});

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   Tasks.getTask(id)
//     .then((task) => {
//       res.status(200).json(task);
//     })
//     .catch(() => {
//       res.status(500).json({ message: "failed to retrieve task" });
//     });
// });

router.post("/", (req, res) => {
  const task = req.body;
  Tasks.addTask(task)
    .then((task) => {
      res.status(201).json({ message: "task successfully created", task: task });
    })
    .catch((err) => {
        console.log(err)
      res.status(500).json({ message: "failed to add new task", err });
    });
});

module.exports = router;
