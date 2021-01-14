import Dropzone from 'react-dropzone';

import {DropContainer, UploadMessage} from './styles';

function Upload(props) {
  function renderDragMessage(isDragActive, isDragReject){
    if(!isDragActive) return <UploadMessage>Solte os seus arquivos aqui...</UploadMessage>

    if(isDragReject) return <UploadMessage type="error">Arquivo não suportado</UploadMessage>

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  };

  const { onUpload } = props;
  return(
    <Dropzone 
      accept="image/*"
      onDropAccepted={files => onUpload(files)}
    >
      { ({getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept}) => (
        <DropContainer 
        {...getRootProps()} 
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        isDragAccept={isDragAccept}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )

      }
    </Dropzone>
  )

}

export default Upload;