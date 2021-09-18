import styled from 'styled-components';

const Wrapper = styled.div` 
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid #e9e9e9;
  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;
