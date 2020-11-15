import React from 'react';
import FileUpload from './components/FileUpload';
import Dropzone from './components/Dropzone'
import './App.css';

const App = () => (
    <div className='container'>
        <h4 className='row  display-4 text-center align-center'>
        <i className='fab fa fa-cloud' /> Viga Studios
        </h4>
        <Dropzone onFilesAdded={console.log} />

        <FileUpload />
     </div>
);

export default App;
