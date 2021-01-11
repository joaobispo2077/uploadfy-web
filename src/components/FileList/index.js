import { FiCheckCircle, FiXCircle, FiLink } from 'react-icons/fi';
import { Container, FileInfo, Preview } from './styles';

import { CircularProgressbar } from 'react-circular-progressbar';

const FileList = () => {
  return(
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://avatars2.githubusercontent.com/u/43768058?s=460&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4" />
          <div>
            <strong>profile_github.png</strong>
            <span>64kb <button onClick={() => {}}>Excluir</button></span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar 
            styles={{
              root: { width: 24 },
              path: { stroke: '#359a77'}
            }}
            strokeWidth={10}
            percentage={65}
          />

          <a
            href="https://avatars2.githubusercontent.com/u/43768058?s=460&u=88f13aa1305b0a1d36270179b7f2fbf3725b792b&v=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
          <FiCheckCircle size={24} color="#78e5d5" />
          <FiXCircle size={24} color="#e57878" />
        </div>
      </li>
    </Container>
  )
};

export default FileList;