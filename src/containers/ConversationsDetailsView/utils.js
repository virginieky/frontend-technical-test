export const getFormattedMessages = (messages) => {
  return messages.map((message) => {
    const { timestamp, authorId, body, ...rest } = message;
    return {
      ...rest,
      timestamp: new Date(timestamp * 1000),
      author: { id: authorId },
      text: body,
    };
  });
};
