import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'
import Histogram from './Histogram'
import PercentageBar from './PercentageBar'

function DaysCompleted(props) {

    const { days, checkins } = props



    const textStyle = { fontFamily: `Quicksand`, textAlign: 'center', color: 'rgb(113, 69, 206)' }
    const headerContainer = {
        width: "100%",
    }
    const histogramStyle = {
        width:"100%",
        display:"flex",
        justifyContent:"space-between"
    }

    return (

        <Tile>
            <div style={headerContainer}>
                <h1 style={textStyle}> {days} Days Completed </h1>
            </div>
            <div style={histogramStyle}>
                {checkins.map((checkin) => <Histogram percentage={checkin.score * 5} />)}
            </div>
            <PercentageBar/>

        </Tile>

    )

}

DaysCompleted.propTypes = {
    days: PropTypes.number,
    percentage: PropTypes.number
}

DaysCompleted.defaultProps = {
    days: 0,
    percentage: 0
}

export default DaysCompleted

