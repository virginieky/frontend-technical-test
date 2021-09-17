import getDisplayedDate from '../getDisplayedDate';

describe('utils', () => {
  describe('getDisplayedDate', () => {
    it('should return value as a readable date if value exists', () => {
      const value = '1625637849';

      const expected = '07/07/2021';
      
      expect(getDisplayedDate(value)).toEqual(expected);
    });

    it('should return null if value is null', () => {
      const value = null;

      const expected = null;
      
      expect(getDisplayedDate(value)).toEqual(expected);
    });

    it('should return null if value is undefined', () => {
      const value = undefined;

      const expected = null;
      
      expect(getDisplayedDate(value)).toEqual(expected);
    });
  });
});
