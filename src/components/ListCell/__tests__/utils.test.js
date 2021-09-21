import { getCellClick } from '../utils';

describe('getCellClick', () => {
  const getCellClickProps = {
    onClick: jest.fn(),
  };

  it('should call onClick with the right id', () => {
    const expected = 1;
    getCellClick(getCellClickProps)(expected);

    expect(getCellClickProps.onClick).toHaveBeenCalledWith(expected);
  });
});
