import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const dragAccept = css`
  border-color: #6B7FD7;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
  ${props => props.isDragAccept && dragAccept};
`;

export const UploadMessage = styled.p`
`;