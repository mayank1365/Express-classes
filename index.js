const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

let courses = [
    { id : 1 , "name": "course1" },
    { id : 2 , "name": "course2" },
    { id : 3 , "name": "course3" },
];

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.post('/courses', (req, res) => {
    console.log(req.body);
    let singleCourse = {
        id : courses.length + 1,
        "name": req.body.name
    };
    courses.push(singleCourse);
    res.json(courses);
});

app.put('/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    course.name = req.body.name;
    res.json(course);
});

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.json(courses);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});