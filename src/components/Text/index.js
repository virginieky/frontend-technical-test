import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.p`
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  ${({ ellipsis }) => ellipsis && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  margin-bottom: 0;
`;

Text.defaultProps = {
  color: 'black',
  ellipsis: false,
  fontSize: '1.3rem',
  fontWeight: 'regular',
  lineHeight: '1.3rem',
  textTransform: 'none',
};

Text.propTypes = {
  color: PropTypes.string,
  ellipsis: PropTypes.bool,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  textTransform: PropTypes.string,
};

export default Text;
