import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: ${({ isSelected }) => (isSelected ? '#e6ebef' : '#f5f5f5')};
  border-left: 3px solid
    ${({ isSelected }) => (isSelected ? '#ff6e14' : 'transparent')};
  :hover {
    background-color: #e6ebef;
    cursor: pointer;
  }
`;

Wrapper.defaultProps = {
  isSelected: false,
};

Wrapper.propTypes = {
  isSelected: PropTypes.bool,
};

export default Wrapper;
