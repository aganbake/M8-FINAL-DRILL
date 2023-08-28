const express = require('express');
const router = express.Router();
const {
  createBootcamp,
  addUserToBootcamp,
  findBootcampById,
  findAllBootcamps,
  updateBootcampById,
  deleteBootcampById,
} = require('../controllers/bootcamp.controller');
const { verifyToken } = require('../middleware');

/**
method: GET
url: http://localhost:3000/api/bootcamp
*/
router.get('/', findAllBootcamps);

// Aplicamos seguridad de aquí en adelante
router.use('/', verifyToken);

/**
method: POST
url: http://localhost:3000/api/bootcamp
body:
{
    "title":"name",
    "cue":"number",
    "description":"string"
}
*/
router.post('/', createBootcamp);

/**
method: POST
url: http://localhost:3000/api/bootcamp/adduser
body:
{
    "BootcampId":1,
    "userId":1
}
*/
router.post('/adduser', addUserToBootcamp);

/**
method: GET
url: http://localhost:3000/api/bootcamp/1
*/
router.get('/:id', findBootcampById);

/**
method: PUT
url: http://localhost:3000/api/bootcamp/1
body:
{
    "name": "Proyecto B",
    "description": "Proyecto de prueba B"
}
*/
router.put('/:id', updateBootcampById);

/**
method: DELETE
url: http://localhost:3000/api/bootcamp/1
*/
router.delete('/:id', deleteBootcampById);

module.exports = router;
