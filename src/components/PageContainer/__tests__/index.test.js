import React from 'react';
import { render } from '@testing-library/react';
import PageContainer from '../index';

describe('PageContainer', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<PageContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
