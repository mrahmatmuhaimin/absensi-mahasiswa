import React from 'react'
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

function StudentList() {
    const [studentLis, setStudentLis] = useState([])

    useEffect(() => {
        // Lakukan HTTP REQUEST - GET
        const urlMenampilkanBuku = "http://localhost:3300/admin/studentlist"
        fetch(urlMenampilkanBuku) // Ngembaliin objek Promise
            .then(respon => {
                console.log("respon", respon)

                return respon.json()
            })
            .then(responJSON => { // List buku
                console.log("respon JSON", responJSON)

                setStudentLis(responJSON)
            })
    }, [])

    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="../../assets/styles/list.css" />
                <title>Student list</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <span id="name">Mahasiswa</span>
                </div>
                <div id="content">
                    <div class="box-row">
                        {studentLis.map((student) => {
                            return (
                                <div class="card">
                                    <div>
                                        <h2 class="NIM">{student.nim}</h2>
                                        <span class="nama">{student.nama}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StudentList
