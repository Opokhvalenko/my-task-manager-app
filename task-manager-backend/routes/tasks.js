const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controllers/tasks');

const taskValidationRules = [
    body('description')
        .notEmpty().withMessage('Description cannot be empty')
        .isString().withMessage('Description must be a string')
        .trim()
        .isLength({ min: 1, max: 100 }).withMessage('Description must be between 1 and 100 characters'),
    body('completed')
        .optional().isBoolean().withMessage('Completed must be a boolean value (true/false)')
];

router.route('/').get(getAllTasks).post(taskValidationRules, createTask);

router.route('/:id').get(getTask).patch(taskValidationRules, updateTask).delete(deleteTask);

module.exports = router;
