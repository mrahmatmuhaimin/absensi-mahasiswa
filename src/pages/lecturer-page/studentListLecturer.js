import React from 'react'
import { Helmet } from "react-helmet";

function studentListLecturer() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="../../assets/styles/list.css"/>
                <title>Student list Lecturer</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <span id="name">List Mahasiswa Yang Hadir</span>
                </div>
                <div id="content">
                    <div class="box-row">
                        <div class="card">
                            <h2 class="NIM">1207050078</h2>
                            <div class="nama">Muhammad Rahmat Muhaimin</div>
                            <div class="attendance">Hadir</div>
                        </div>
                        <div class="card">
                            <h2 class="NIM">1207050080</h2>
                            <div class="nama">Lionel Messi</div>
                            <div class="attendance">Tidak Hadir</div>
                        </div>
                        <div class="card">
                            <h2 class="NIM">1207050081</h2>
                            <div class="nama">Neymar</div>
                            <div class="attendance">Hadir</div>
                        </div>
                        <div class="card">
                            <h2 class="NIM">1207050082</h2>
                            <div class="nama">Lewandowski</div>
                            <div class="attendance">Tidak Hadir</div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default studentListLecturer




