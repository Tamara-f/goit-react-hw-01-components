import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Sec = styled.section`
  padding: 0;
  margin: 0;
  list-style: none;
  outline: 1px solid grey;
  box-shadow: 5px 3px 19px 0px;
  padding-bottom: 10px;
`;

function Section({ title, children }) {
  return (
    //if title= true - renter h2 title. else -nothing
    <Sec>{children}</Sec>
  );
}

Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Section;
