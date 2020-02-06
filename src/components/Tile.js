import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Tile = styled.div`
box-shadow: 40px 10px 20px rgba(31, 32, 32, ${props => props.elevation});
padding: 3%;
margin:0 auto;
`;


Tile.propTypes = {
    elevation: PropTypes.string
};

Tile.defaultProps = {
    elevation: "0.02"
};

export default Tile;