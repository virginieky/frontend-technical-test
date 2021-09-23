import styled from 'styled-components';
import { Modal } from 'reactstrap';

const ModalWrapper = styled(Modal)`
  button.close {
    background: white;
    border: 0;
    font-size: 20px;
    outline: 0;
  }
`;

export default ModalWrapper;
