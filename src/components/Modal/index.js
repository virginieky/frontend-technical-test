import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
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

const Modal = ({ onCreate, options }) => {
  const [modal, setModal] = useState(false);
  const [recipient, setRecipient] = useState('');
  const isSubmitButtonDisabled = !recipient;
  const toggle = getModalToggle({ setModal });

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        New conversation
      </Button>
      <ReactstrapModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create new conversation</ModalHeader>
        <ModalBody>
          {options.length > 0 ? (
            <Form>
              <FormGroup>
                <Label for='recipient'>Choose a contact</Label>
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
            <Button
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
            </Button>
          )}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ReactstrapModal>
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
