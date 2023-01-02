import React from 'react'
import { Helmet } from "react-helmet";

function studentAttendanceOverview() {
    (async () => {
        const rawResponse = await fetch('https://localhost:3300/student/attendanceoverview', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({a: 1, b: 'Textual content'})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="../../assets/styles/modulPage.css"/>
                <title>Student Attendance Overview</title>
            </Helmet>
            <div class="container">
                <div class="header">
                        <div id="name">Muhammad Rahmat Muhaimin</div>
                        <div id="id_admin">1207050078</div>
                </div>
                <div id="content">
                    <div class="box-row">
                        <div class="card">
                            <div class="namaMatkul">Praktikum Pengembangan Aplikasi Mobile</div>
                            <div class="box-row-sub">
                                <div class="attendance">Tidak Hadir</div>
                                <div class="tanggal">Mon 12.40 - 15.00</div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

        </React.Fragment>
    )
}
export default studentAttendanceOverview




