import React from 'react';
import { render } from '@testing-library/react';
import { BackButton, LeftPanel } from '../styles';

describe('pages | ConversationsPage | components', () => {
  describe('BackButton', () => {
    it('should match the snapshot if isHidden is false', () => {
      const { asFragment } = render(<BackButton isHidden={false} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should match the snapshot if isHidden is true', () => {
      const { asFragment } = render(<BackButton isHidden={true} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('LeftPanel', () => {
    it('should match the snapshot if isHidden is false', () => {
      const { asFragment } = render(<LeftPanel isHidden={false} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should match the snapshot if isHidden is true', () => {
      const { asFragment } = render(<LeftPanel isHidden={true} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
