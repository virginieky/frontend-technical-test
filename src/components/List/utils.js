export const sortConversations = (conversations) => {
  return [...conversations].sort((x, y) => {
    return y.lastMessageTimestamp - x.lastMessageTimestamp;
  });
};
