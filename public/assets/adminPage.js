import React from 'react';
import { Helmet } from "react-helmet";

function adminPage() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="../../assets/styles/homePage.css"/>
                <title>Admin Page</title>
            </Helmet>
            <div class="container">
        <div class="header">
            <div id="name">Nama Admin</div>
            <div id="id_admin">ID Admin</div>
        </div>
        <div id="content">
            <div class="box-row-1">
                <div class="students card">
                    <a href="/admin/StudentList">
                        <img class="icon" src="/assets/image/adminpage/student.svg" alt="Students"/>
                        Students
                    </a>
                </div>
                <div class="lecturers card">
                    <a href="/admin/LecturerList">
                        <img class="icon" src="/assets/image/adminpage/lecturer.svg" alt="Lecturers"/>
                        Lecturers
                    </a>
                </div>
            </div>
            <div class="box-row-2">
                <div class="attendance card">
                    <a href="/admin/attendanceadmin">
                        <img class="icon" src="/assets/image/adminpage/attendance.png" alt="Attendance"/>
                        Attendance
                    </a>
                </div>
                <div class="settings card">
                    <a href="/setting">
                        <img class="icon" src="/assets/image/adminpage/settings.svg" alt="Settings"/>
                        Settings
                    </a>
                </div>
            </div>
        </div>
    </div>


        </React.Fragment>
    )
}
export default adminPage



