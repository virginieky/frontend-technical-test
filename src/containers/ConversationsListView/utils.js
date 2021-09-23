export const filterByReference = (arr1, arr2, key) => {
  let res = [];
  res = arr1.filter((el) => {
    return !arr2.find((element) => {
      return element[key] === el.id;
    });
  });

  return res;
};

export const getConversationCreate =
  ({ onConversationCreate }) =>
  (recipient) => {
    onConversationCreate(recipient);
  };

export const getCellClick =
  ({ onSelectedConversationChange, setIsListHidden }) =>
  (id) => {
    onSelectedConversationChange(id);
    setIsListHidden(true);
  };
