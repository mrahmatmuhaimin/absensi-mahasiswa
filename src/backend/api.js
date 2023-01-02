/* eslint-disable no-unused-expressions */
const client = require('./connection.js')
const cors = require('cors')
const express = require('express');

const app = express();
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})
client.connect();

app.use(cors({
    origin: '*'
}));

// path /admin/studentlist
app.get('/admin/studentlist', (req, res)=>{
    client.query(`Select * from app.students`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/admin/studentlist/:id', (req, res)=>{
    client.query(`Select * from app.students where id=$1`,[req.params.id], (err, result)=>{
        if(!err){
            res.send(result.rows[0]);
        }
    });
    client.end;
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.post('/admin/studentlist', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into app.students(nim, nama) 
                       values('${user.nim}', '${user.nama}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// path /admin/lecturerlist
app.get('/admin/lecturerlist', (req, res)=>{
    client.query(`Select * from app.lecturers`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/admin/lecturerlist/:id', (req, res)=>{
    client.query(`Select * from app.lecturers where id=$1`,[req.params.id], (err, result)=>{
        if(!err){
            res.send(result.rows[0]);
        }
    });
    client.end;
})

app.use(bodyParser.json());
app.post('/admin/lecturerlist', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into app.lecturers(nip, nama) 
                       values('${user.nip}', '${user.nama}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

// path /student/module
app.get('/student/module', (req, res)=>{
    client.query(`Select * from app.modules`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/student/module/:id', (req, res)=>{
    client.query(`Select * from app.modules where id=$1`,[req.params.id], (err, result)=>{
        if(!err){
            res.send(result.rows[0]);
        }
    });
    client.end;
})

app.use(bodyParser.json());
app.post('/student/module', (req, res)=> {
    const user = req.body;
    console.log(user)
    let insertQuery = `insert into app.modules(nama_matkul, nama_dosen, tanggal) 
                       values('${user.nama_matkul}', '${user.nama_dosen}', '${user.tanggal}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update users
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       location = '${user.location}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from users where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})