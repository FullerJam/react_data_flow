import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Histogram from './components/Histogram'

function DaysCompleted(props) {
    console.log(props)
    const { days } = props

    return (
        <div>
            <h1> {days} Days Completed</h1>
        </div>

    )

}

DaysCompleted.propTypes = {
    days: PropTypes.number
}

DaysCompleted.defaultProps = {
    days:0.5
}

export default DaysCompleted

