export const getCellClick =
  ({ onClick, id }) =>
  () => {
    onClick(id);
  };
