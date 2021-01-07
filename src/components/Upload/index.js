import Dropzone from 'react-dropzone';

import {DropContainer, UploadMessage} from './styles';

function Upload() {
  return(
    <Dropzone 
      accept="image/*"
      onDropAccepted={() => {}}
    >
      { ({getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept}) => (
        <DropContainer 
        {...getRootProps()} 
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        isDragAccept={isDragAccept}
        >
          <input {...getInputProps()} />
          Faça upload dos seus arquivos
        </DropContainer>
      )

      }
    </Dropzone>
  )

}

export default Upload;