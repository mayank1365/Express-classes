const express = require('express');

const app = express();

const port = 3000;

let courses = [
    { id : 1, name : 'course1'},
    { id : 2, name : 'course2'},
    { id : 3, name : 'course3'}
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

