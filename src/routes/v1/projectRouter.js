const router = require('express').Router();

const ProjectController = require('../../app/controller/ProjectController');
const projectValidation = require('../../app/validation/projectValidation');

router
	.post('/project',projectValidation, ProjectController.create)
	.get('/project', ProjectController.findAll);

module.exports = router;