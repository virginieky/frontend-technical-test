import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

Flex.defaultProps = {
  alignItems: 'normal',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'normal',
};

Flex.propTypes = {
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default Flex;
