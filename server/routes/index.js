var express = require('express');
var router = express.Router();


const listTask = [
  {
    id: 1,
    name: 'Go to work',
    description: 'Description go to work',
    status: 1
  },
  {
    id: 2,
    name: 'Go to eat',
    description: 'Description go to eat',
    status: 2
  },
  {
    id: 3,
    name: 'Go to sleep',
    description: 'Description go to sleep',
    status: 3
  },
  {
    id: 4,
    name: 'Go to gym',
    description: 'Description go to gym',
    status: 2
  },
];

router.get('/', function (req, res, next) {
  console.log('Default');
  res.send(listTask);
});
/* GET home page. */
router.get('/tasks', function (req, res, next) {
  console.log('Get all');
  res.send(listTask);
});

router.delete('/task/:id', function (req, res, next) {
  console.log('Delete');
  const id = req.params.id;
  const deleteIndex = listTask.findIndex(t => t.id == id);
  if (deleteIndex == -1) {
    next(error);
  }
  listTask.splice(deleteIndex, 1);
  res.send(id);
});

router.get('/search-task', function (req, res, next) {
  try {
    const keyword = req.query.keyword.toString().toLowerCase();
    const taskFilter = listTask.filter(t => t.id.toString().toLowerCase().includes(keyword)
      || t.name.toLowerCase().includes(keyword) || t.description.toLowerCase().includes(keyword));
    if (taskFilter !== null) {
      res.send(taskFilter);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/tasks/:id', function (req, res, next) {
  console.log('Find Id');
  const id = req.params.id;
  const task = listTask.find(t => t.id == id);
  console.log(task);
  if (task !== null) {
    res.send(task);
    res.end();
  }
  res.status(500);
});

router.post('/tasks', function (req, res, next) {
  console.log('Add tasks');
  try {
    const task = req.body.task;
    const id = (listTask.length <= 0) ? 1 : listTask[listTask.length - 1].id + 1;
    console.log(task);
    task.id = id;
    listTask.push(task);
    res.send(task);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

router.put('/tasks', function(req, res, next) {
  try {
    const {task} = req.body;
    const taskEditIndex = listTask.findIndex(t => t.id == task.id);
    if (taskEditIndex != -1) {
      listTask[taskEditIndex] = task;
    }
    res.send(task);
  } catch (error) {
    next(error);
    console.log('Edit:', error);
  }
})

module.exports = router;
