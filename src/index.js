import express from "express";

const app = express();
app.use(express.json());

//dummy data
let users = [
    { id: 1,name:"ucup"},
    { id: 2,name:"rucup"},
    { id: 2v,name:"rucup"},
]

//get
app.get("/users", (req,res) => {
    res.json(users);
})

//post
app.post("/users", (req,res) => {
    const { name } = req.body;
    const newUser = {id:users.length + 1,name:name};
    users.push(newUser);
    res.status(201).json(newUser);
})

app.get("/test", (req,res) => 
{
    res.send("Selamat Datang");
});

app.listen(5001, () => console.log
("Server runing on http://localhost:5001"));