import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from 'react-bootstrap-icons';
import {
  Button as ReactstrapButton,
  Form,
  FormGroup,
  Input,
  Modal as ReactstrapModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import {
  getCreateButtonClick,
  getModalToggle,
  getRecipientChange,
} from './utils';
import Button from '../Button';
import ModalWrapper from './ModalWrapper';

const Modal = ({ onCreate, options }) => {
  const [modal, setModal] = useState(false);
  const [recipient, setRecipient] = useState('');
  const isSubmitButtonDisabled = !recipient;
  const toggle = getModalToggle({ setModal });

  return (
    <div>
      <Button onClick={toggle}>
        <PlusCircle size={24} color='#ff6e14' />
        <span>New conversation</span>
      </Button>
      <ModalWrapper isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create new conversation</ModalHeader>
        <ModalBody>
          {options.length > 0 ? (
            <Form>
              <FormGroup>
                <Input
                  type='select'
                  name='recipient'
                  id='recipient'
                  value={recipient}
                  onChange={getRecipientChange({ setRecipient })}
                >
                  <option value=''>Please choose a contact</option>
                  {options.map((option) => {
                    return (
                      <option key={option.id} value={option.id}>
                        {option.nickname}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Form>
          ) : (
            <p>You don't have any contact for the moment!</p>
          )}
        </ModalBody>
        <ModalFooter>
          {options.length > 0 && (
            <ReactstrapButton
              disabled={isSubmitButtonDisabled}
              color='primary'
              onClick={getCreateButtonClick({
                options,
                recipient,
                onCreate,
                toggle,
              })}
            >
              Create
            </ReactstrapButton>
          )}
          <ReactstrapButton color='secondary' onClick={toggle}>
            Cancel
          </ReactstrapButton>
        </ModalFooter>
      </ModalWrapper>
    </div>
  );
};

Modal.defaultProps = {
  onCreate: () => {},
  options: [],
};

Modal.propTypes = {
  onCreate: PropTypes.func,
  options: PropTypes.array,
};

export default Modal;
