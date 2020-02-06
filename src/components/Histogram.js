import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


function Bar(props) {
    const { percentage } = props;
    const BarStyle = styled.div`
        background:
            linear-gradient(180deg, rgba(56,149,95,.25), rgba(102,210,234,.25));
        width: 30px;
        height: 70.74px;
        border-radius: 2px;
        display: flex;
        align-items: flex-end;
    `;

    const InnerBar = styled.div`
        background:
            linear-gradient(180deg, rgba(56,149,95,1), rgba(102,210,234,0.5));
        opacity: 100 !important;
        height: ${ percentage }% ;
        width: 100%;
        border-radius: 2px;
    `;

    return (
        <BarStyle>
            <InnerBar></InnerBar>
        </BarStyle>
    );
}

Bar.propTypes = {
    percentage: PropTypes.number.isRequired
};

function Histogram(props) {
    const { percentage } = props;

    const divStyle = {
        display: "flex",
        justifyContent: "space-around"
    };

    return (
        <div style={divStyle}>
            <Bar percentage={percentage} />
        </div>
    );
}

Histogram.propTypes = {
    bars: PropTypes.array.isRequired
};

export default Histogram;