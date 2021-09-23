import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 4;
  background: white;
  border: 0;
  outline: 0;
  display: ${({ isHidden }) => (!isHidden ? 'block' : 'none')};
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Panel = styled.div`
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  @media (min-width: 1024px) {
    width: 50%;
    display: inline-block;
    vertical-align: top;
  }
`;

export const RightPanel = styled(Panel)`
  z-index: 0;
`;

export const LeftPanel = styled(Panel)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isHidden }) =>
    !isHidden ? 'translateX(0)' : 'translateX(-100%)'};

  @media (min-width: 1024px) {
    position: relative;
    transition: initial;
    transform: initial;
    border-left: 1px solid #e9e9e9;
  }
`;

LeftPanel.defaultProps = {
  isHidden: 'false',
};

LeftPanel.propTypes = {
  isHidden: PropTypes.bool,
};
