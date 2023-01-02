// /* eslint-disable react-hooks/rules-of-hooks */
// import React, {useState} from 'react'
// import { Helmet } from "react-helmet";
// import Header from '../components/header';
// import QrReader from 'react-qr-reader';


// const [scanResultWebCam, setScanResultWebCam] =  useState('');
// const handleErrorWebCam = (error) => {
//   console.log(error);
// }
// const handleScanWebCam = (result) => {
//   if (result){
//       setScanResultWebCam(result);
//   }
//  }

// function QrScanner() {
//     return (
//         <React.Fragment>
//             <Helmet>
//                 <meta charset="UTF-8" />
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <link rel="stylesheet" href="../../assets/styles/modulPage.css" />
//                 <title>Module Page Student</title>
//             </Helmet>
//             <div class="container">
//                 <Header nama="Muhammad Rahmat Muhaimin" nim="1207050078" />
//                 <div id="content">
//                     <div>
//                         <div class="card">
//                         <QrReader
//                          delay={300}
//                          style={{width: '100%'}}
//                          onError={handleErrorWebCam}
//                          onScan={handleScanWebCam}
//                          />
//                          <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </React.Fragment>
//     )
// }
// export default QrScanner




