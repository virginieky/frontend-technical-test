export const getCreateButtonClick =
  ({ options, recipient, onCreate, toggle }) =>
  () => {
    const recipientId = parseInt(recipient);
    const selectedOption = options.find((option) => option.id === recipientId);

    onCreate({
      recipientId,
      recipientNickname: selectedOption.nickname,
    });
    toggle();
  };

export const getModalToggle =
  ({ setModal }) =>
  () => {
    setModal((prevState) => !prevState);
  };

export const getRecipientChange =
  ({ setRecipient }) =>
  ({ target: { value } }) => {
    setRecipient(value);
  };
