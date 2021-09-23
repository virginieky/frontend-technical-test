import styled from 'styled-components';

const Wrapper = styled.div`
  > div {
    margin: 0 auto;
    height: calc(100vh - 70px);
    max-width: 100%;
    > div:last-of-type input {
      height: 70px;
    }
  }
`;

export default Wrapper;
