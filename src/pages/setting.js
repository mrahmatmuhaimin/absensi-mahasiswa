import React from 'react'
import { Helmet } from "react-helmet";

function setting() {
    return (
        <React.Fragment>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="assets/styles/setting.css"/>
                <title>Setting Page</title>
            </Helmet>
            <div class="container">
                <div class="header">
                    <div id="name">Setting</div>
                </div>
                <div id="content">
                    <div class="card">
                        <a href="/">Reset Password</a>
                    </div>
                    <div class="card">
                        <a href="/">Logout</a>                   
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default setting



