import React from 'react'
import { Helmet } from "react-helmet";

function studentPage() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="../../assets/styles/homePage.css" />
                <title>Student Page</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <div id="name">Nama</div>
                    <div id="id_admin">NIM</div>
                </div>
                <div id="content">
                    <div class="box-row-1">
                        <div class="students card">
                            <a href="/student/qrcode">
                                <img class="icon" src="/assets/image/student-lecturerpage/qr_code.svg" alt="Create Code" />
                                Create Code
                            </a>
                        </div>
                        <div class="lecturers card">
                            <a href="/student/attendance">
                                <img class="icon" src="/assets/image/student-lecturerpage/attendance.png" alt="Attendance" />
                                Attendance
                            </a>
                        </div>
                    </div>
                    <div class="box-row-2">
                        <div class="attendance card">
                            <a href="/student/module">
                                <img class="icon" src="/assets/image/student-lecturerpage/module.svg" alt="Modules" />
                                Modules
                            </a>
                        </div>
                        <div class="settings card">
                            <a href="/setting">
                                <img class="icon" src="/assets/image/student-lecturerpage/settings.svg" alt="Settings" />
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default studentPage




