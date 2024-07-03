const express= require('express');
const app = express();

const port = 3000 ;

app.use(express.json());
app.use(middleware);

let courses=[
    {"id":"1", "name":'java'},
    {"id":"2", "name":'javascript'},
    {"id":"3", "name":'python'}
];

app.get('/courses', (req, res)=>{
    res.json(courses);
})



app.post('/courses', (req, res)=>{
    console.log(req.body);
    const course={
        "id": (courses.length + 1).toString(),
        "name": req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/courses/:id', (req, res)=>{
    const course= courses.find(c=>c.id===req.params.id);
    if(!course) return res.status(404).send('The course with the given ID was not found');
    course.name=req.body.name;
    res.send(course);
});

app.delete('/courses/:id', (req, res)=>{
    const course= courses.find(c=>c.id===req.params.id);
    if(!course) return res.status(404).send('The course with the given ID was not found');
    const index= courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function middleware(req, res, next) {
    console.log("called");
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.method);
    console.log(req.url);
    console.log(new Date());
    next();
}

app.listen(port, ()=>{
    console.log('Server is running on port 3000');
});