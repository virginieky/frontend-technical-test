import { getCellClick } from '../utils';

describe('getCellClick', () => {
  const getCellClickProps = {
    onClick: jest.fn(),
    id: 1,
  };

  it('should call onClick with the right id', () => {
    getCellClick(getCellClickProps)();

    expect(getCellClickProps.onClick).toHaveBeenCalledWith(1);
  });
});
