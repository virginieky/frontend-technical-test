import { getBackButtonClick } from '../utils';

describe('pages | ConversationsPage | utils', () => {
  describe('getBackButtonClick', () => {
    const getBackButtonClickProps = {
      setIsListHidden: jest.fn(),
    };

    it('should call setIsListHidden with false value', () => {
      getBackButtonClick(getBackButtonClickProps)();

      expect(getBackButtonClickProps.setIsListHidden).toHaveBeenCalledWith(
        false,
      );
    });
  });
});
