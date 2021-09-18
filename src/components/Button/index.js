import styled from 'styled-components';

const BackButton = styled.button`
  display: block;
  margin: auto;
  width: fit-content;
  height: 40px;
  padding: 0 10px;
  background: #ff6e14;
  border: 0;
  color: white;
  border-radius: 4px;
  transition: background-color .3s;
  &:hover {
    background-color: #c0562a;
  }
`;

export default BackButton;
