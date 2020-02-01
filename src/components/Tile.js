import React from "react"
import PropTypes from "prop-types"

function Tile(props){
    const { children, elevation } = props

    
    const divStyle = {
        boxShadow: `0px 10px 20px rgba(31, 32, 65, ${elevation}`
    }

    return <Tile style={divStyle}>{children}></Tile>
}

export default Tile

Tile.propTypes = {
    elevation: PropTypes.string
}

Tile.defaultPropTypes = {
    elevation:"0.1"
}