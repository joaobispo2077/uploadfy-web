import React, { useState } from 'react';

import filesize from 'filesize';
import { v4 as uuidv4 } from 'uuid';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

import uploadAPI from './services/api/Upload';
function App() {

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleUpload = files => {
    const newUploadedFiles = files.map(file => ({
      file,
      id: uuidv4(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }))

    setUploadedFiles(uploadedFiles.concat(newUploadedFiles));

    uploadedFiles.forEach(processUpload);
  };

  const processUpload = (file) => {
    console.log(file);

    const data = new FormData();

    data.append('file', file.file, file.name);

    uploadAPI.post('images', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        updateFile(file.id, {
          progress
        });


      }
    });

  }

  const updateFile = (id, data) => {
    setUploadedFiles(uploadedFiles.map(uploadedFile => {
      return id === uploadedFile.id ? 
      { ...uploadedFile, ...data} : 
      uploadedFile;
    }
    ))
  };

  return (
    <Container>
      <Content>Teste

      <Upload onUpload={handleUpload}/>
      { !!uploadedFiles.length && (

        <FileList files={uploadedFiles} />
      ) }
      </Content>
      <GlobalStyle/>
    </Container>

  );
}

export default App;
