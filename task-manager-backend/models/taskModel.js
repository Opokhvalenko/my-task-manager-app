const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        maxlength: [100, 'Description can not be more than 100 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', TaskSchema);
