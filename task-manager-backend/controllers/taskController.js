const Task = require('../models/taskModel');
const asyncHandler = require('../middleware/asyncHandler');
const { createCustomError } = require('../errors/CustomError');

// @desc    Get all tasks
// @route   GET /api/v1/tasks
// @access  Public
const getAllTasks = asyncHandler(async (req, res, next) => {
    const tasks = await Task.find();
    res.status(200).json({ success: true, count: tasks.length, tasks });
});

// @desc    Get single task
// @route   GET /api/v1/tasks/:id
// @access  Public
const getTask = asyncHandler(async (req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }

    res.status(200).json({ success: true, task });
});

// @desc    Create a task
// @route   POST /api/v1/tasks
// @access  Public
const createTask = asyncHandler(async (req, res, next) => {
    const { description } = req.body;

    if (!description) {
        return next(createCustomError('Task description is required', 400));
    }

    const task = await Task.create(req.body);
    res.status(201).json({ success: true, task });
});

// @desc    Update a task
// @route   PATCH /api/v1/tasks/:id
// @access  Public
const updateTask = asyncHandler(async (req, res, next) => {
    const { id: taskId } = req.params;
    const { description, completed } = req.body;

    if (description !== undefined && !description.trim()) {
        return next(createCustomError('Task description cannot be empty', 400));
    }

    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }

    res.status(200).json({ success: true, task });
});

// @desc    Delete a task
// @route   DELETE /api/v1/tasks/:id
// @access  Public
const deleteTask = asyncHandler(async (req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
        return next(createCustomError(`No task with id: ${taskId}`, 404));
    }

    res.status(200).json({ success: true, msg: 'Task deleted successfully' });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};
