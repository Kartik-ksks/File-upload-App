import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = ({setUploadedFile}) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });
      const { fileName, filePath } = response.data;

      setUploadedFile({ fileName, filePath });
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
        style={{ border: '1px dashed #ccc', padding: '20px', marginBottom: '20px' }}
      >
        <p>Drag and drop a file here, or click to select a file.</p>
        {file && (
          <div>
            <p>Selected file: {file.name}</p>
            <button onClick={handleUpload}>Upload</button>
          </div>
        )}
      </div>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
    </div>
  );
};

export default FileUploader;
