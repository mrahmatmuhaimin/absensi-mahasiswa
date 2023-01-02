/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Helmet } from "react-helmet";
import Header from '../components/header';
import QRCode from 'react-qr-code';

function qrCode() {
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
                <Header nama="Muhammad Rahmat Muhaimin" nim="1207050078" />
                <div id="content">
                    <div>
                        <div class="card">
                            <QRCode class="qrcode" value="Hadir"/>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default qrCode




