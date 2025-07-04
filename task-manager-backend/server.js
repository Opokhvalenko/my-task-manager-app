const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors'); 
app.use(express.json());


app.use(cors({
  origin: 'https://my-task-manager-app-three.vercel.app'
}));

const DB_URI = 'mongodb+srv://taskManager:wFJ3E4MPJW4nG@cluster0.qvbeufk.mongodb.net/taskmanagerdb?retryWrites=true&w=majority';

mongoose.connect(DB_URI)
    .then(() => {
        console.log('Connected to MongoDB Atlas!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.get('/', (req, res) => {
    res.send('Welcome to the Simple Task Manager API!');
});

app.use('/api/v1/tasks', taskRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
    console.log(`API endpoints available at http://localhost:${PORT}/api/v1/tasks`);
});