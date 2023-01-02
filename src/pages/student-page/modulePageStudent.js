/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

function modulPageStudent() {
    const [moduleList, setModuleList] = useState([])

    useEffect(() => {
        // Lakukan HTTP REQUEST - GET
        const urlMenampilkanModul = "http://localhost:3300/student/module"
        fetch(urlMenampilkanModul) // Ngembaliin objek Promise
            .then(respon => {
                console.log("respon", respon)

                return respon.json()
            })
            .then(responJSON => { // List buku
                console.log("respon JSON", responJSON)

                setModuleList(responJSON)
            })
    }, [])
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="../../assets/styles/modulPage.css" />
                <title>Module Page Student</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <div id="name">Muhammad Rahmat Muhaimin</div>
                    <div id="id_admin">1207050078</div>
                </div>
                <div id="content">
                    <div class="box-row">
                        {moduleList.map((module) => {
                            return (
                                <div class="card">
                                    <div class="namaMatkul">{module.nama_matkul}</div>
                                    <div class="box-row-sub">
                                        <div class="namaDosen">{module.nama_dosen}</div>
                                        <div class="tanggal">{module.tanggal}</div>
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
export default modulPageStudent




