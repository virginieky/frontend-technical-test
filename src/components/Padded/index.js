import PropTypes from 'prop-types';
import styled from 'styled-components';

const Padded = styled.div`
  position: relative;
  padding-top: ${({ top, small }) => top && (!small ? '10px' : '5px')};
  padding-right: ${({ right, small }) => right && (!small ? '10px' : '5px')};
  padding-bottom: ${({ bottom, small }) => bottom && (!small ? '10px' : '5px')};
  padding-left: ${({ left, small }) => left && (!small ? '10px' : '5px')};
`;

Padded.defaultProps = {
  bottom: false,
  left: false,
  right: false,
  small: false,
  top: false,
};

Padded.propTypes = {
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  small: PropTypes.bool,
  top: PropTypes.bool,
};

export default Padded;
