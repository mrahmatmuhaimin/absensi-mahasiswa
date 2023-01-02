import React from 'react'
import { Helmet } from "react-helmet";

function lecturerPage() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="../../assets/styles/homePage.css"/>
                <title>Lecturer Page</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <div id="name">Nama Dosen</div>
                    <div id="id_admin">NIP</div>
                </div>
                <div id="content">
                    <div class="box-row-1">
                        <div class="students card">
                            <a href="/lecturer/scanner">
                                <img class="icon" src="/assets/image/student-lecturerpage/qr_code.svg" alt="Create Code"/>
                                Scan Code
                            </a>   
                        </div>
                        <div class="lecturers card">
                            <a href="/lecturer/attendancelecturer">
                                <img class="icon" src="/assets/image/student-lecturerpage/attendance.png" alt="Attendance"/>
                                Attendance
                            </a>
                        </div>
                    </div>
                    <div class="box-row-2">
                        <div class="attendance card">
                            <a href="/lecturer/modulPageLecturer">
                                <img class="icon" src="/assets/image/student-lecturerpage/module.svg" alt="Modules"/>
                                Modules
                            </a>
                        </div>
                        <div class="settings card">
                            <a href="/setting">
                                <img class="icon" src="/assets/image/student-lecturerpage/settings.svg" alt="Settings"/>
                                Settings
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default lecturerPage




