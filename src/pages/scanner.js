import React, { useState } from 'react'
import QrScan from 'react-qr-reader'
import { Helmet } from "react-helmet";
import Header from '../components/header';
import { TextareaAutosize } from '@material-ui/core'



function QRscanner() {
  const [qrscan, setQrscan] = useState('No result');
  const handleScan = data => {
    if (data) {
      setQrscan(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
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
        <Header nama="Muhammad Insan Al-Amin" nim="1998349843983" />
        <div id="content">
          <div>
            <div class="card">
              <QrScan
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ height: 240, width: 320 }}
              />

              <TextareaAutosize
                style={{ fontSize: 18, width: 320, height: 100, marginTop: 100 }}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
              />
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}


export default QRscanner;
