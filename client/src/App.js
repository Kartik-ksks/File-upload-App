import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dropzone from './components/Dropzone';
import FileUpload from './components/FileUpload';

const Home = ({uploadedFile}) => {

    return (
        <>
            {uploadedFile ? (
                <div className='row mt-5' >
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'> Uploaded file: {uploadedFile.fileName}</h3>
                        <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                        {/* <Threescene asset={uploadedFile.filePath} /> */}
                    </div>
                </div >
            ) : null}
        </>
    )
}
const App = () => {
    const [uploadedFile, setUploadedFile] = useState(null);

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home uploadedFile={uploadedFile}/>} />
                    <Route exact path="/dragdrop" element={<Dropzone setUploadedFile={setUploadedFile} />} />
                    <Route path="/manualupload" element={<FileUpload setUploadedFile={setUploadedFile} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
