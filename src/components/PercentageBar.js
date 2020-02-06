import React from 'react' 
import PropTypes from 'prop-types'
import styled from "styled-components";

function PercentageBar(props) {
  const { percentage } = props;

  const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 15px;
    display: flex;
    align-items: flex-end;
    background-color: #f4f4f4;
    `;
  
  const Progress = styled.div `
    background-color:#BC9CFF;
    opacity: 100 !important;
    height: 100%;
    width: ${percentage};
    border-radius: 2px;
  `;

  return (
    <Container>
      <Progress></Progress>
    </Container>
  )
}

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default PercentageBar;