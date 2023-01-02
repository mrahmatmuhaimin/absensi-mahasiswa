import React from 'react'
import { Helmet } from "react-helmet";

function attendanceStudentPage() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="../../assets/styles/attendance.css"/>
                <title>Attendance Student Page</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <div id="name">Nama Mahasiswa</div>
                    <div id="id_admin">NIM
                    </div>
                </div>
                <div id="content">
                    <div class="box-row">
                        <div class="card">
                            <p>Please Selet Module and Date</p>
                            <form>
                                <select name="module" id="module">
                                    <option value="Manajemen Basis Data">Manajemen Basis Data</option>
                                    <option value="Pengembangan Aplikasi Web">Pengembangan Aplikasi Web</option>
                                    <option value="Pengembangan Aplikasi Mobile">Pengembangan Aplikasi Mobile</option>
                                    <option value="Intelegensia Buatan">Intelegensia Buatan</option>
                                </select>
                                <label for="Tanggal">Date:</label><br/>
                                <input type="date" id="tanggal" name="tanggal"/>
                                <a href="/student/attendance/studentoverview"><input type="button" value="Submit" id="submit"/></a>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default attendanceStudentPage





