import React, { useState } from 'react';

import filesize from 'filesize';
import { v4 as uuidv4 } from 'uuid';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

function App() {

  let state = {
    uploadedFiles: []
  };

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
