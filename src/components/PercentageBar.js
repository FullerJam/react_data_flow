import React from 'react' 
import PropTypes from 'prop-types'

function PercentageBar(props) {
  const { percentage } = props;
  const container = {
    marginTop: `20px`,
    width: `100%`,
    height: `15px`,
    display: `flex`,
    alignItems: `flex-end`,
    backgroundColor: `#f4f4f4`
  }


  const progress = {
    backgroundColor:
    `#BC9CFF`,
    opacity: `100 !important`,
    height: `100%`,
    width: `20%`,
    borderRadius: `2px`
  }

  return (
    <div style={container}>
      <div style={progress}></div>
    </div>
  )
}

PercentageBar.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default PercentageBar;