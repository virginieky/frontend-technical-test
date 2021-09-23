import ListView from '../index';

describe('containers | ConversationsListView', () => {
  it('should use setIsListHidden defaultProps', () => {
    const {
      defaultProps: { setIsListHidden },
    } = ListView;

    expect(setIsListHidden).toBeDefined();
    expect(setIsListHidden({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
