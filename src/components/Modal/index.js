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

const Modal = ({ onCreate, options }) => {
  const [modal, setModal] = useState(true);
  const [form, setForm] = useState({ recipient: '', message: '' });
  const isSubmitButtonDisabled = !form.recipient || !form.message;

  const toggle = () => setModal(!modal);
  const handleCreateClick = () => {
    const recipientId = parseInt(form.recipient);
    const selectedOption = options.find((option) => option.id === recipientId);
    const message = form.message;

    onCreate({
      recipient: {
        recipientId,
        recipientNickname: selectedOption.nickname,
      },
      message,
    });
    toggle();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
                  value={form.recipient}
                  onChange={handleChange}
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
                <Label for='message'>Message</Label>
                <Input
                  type='text'
                  name='message'
                  id='message'
                  placeholder='Type your message here...'
                  value={form.message}
                  onChange={handleChange}
                />
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
              onClick={handleCreateClick}
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
