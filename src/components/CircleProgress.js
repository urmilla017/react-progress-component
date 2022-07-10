import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/CircleProgress.scss';

const CircleProgress = (props) => {

    const [svgBox, setSvgBox] = useState('0 0 100 100');
    const [dashArray, setDashArray] = useState(0);
    const [dashOffset, setDashOffset] = useState(0);

    useLayoutEffect(() => {
        const cx = props.strokeWidth / 2
        const cy = props.strokeWidth / 2
        const w = 2 * props.radius + props.strokeWidth
        const h = w
        setSvgBox(`-${cx} -${cy} ${w} ${h}`)
    }, [props.radius, props.strokeWidth]);

    useLayoutEffect(() => {
        const dash = 3.14 * 2 * props.radius
        setDashArray(dash)
    }, [props.radius]);

    useLayoutEffect(() => {
        const offset = dashArray * ((props.progressValue > props.totalProgress ? props.totalProgress: props.progressValue) / props.totalProgress) + (3.14 * 2 * props.radius)  
        setDashOffset(-offset)
    }, [props.progressValue, dashArray, props.totalProgress, props.radius]);

    return (
        <div className="circle-progress-wrapper">
            <div className="circle-progress">
                <svg className="circle-progress-bar" viewBox={svgBox} width={2 * props.radius + props.strokeWidth} height={2 * props.radius + props.strokeWidth}>
                <circle cx={props.radius} cy={props.radius} r={props.radius} stroke={props.strokeBackgroundColor} strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} fill={props.backgroundColor} />
                <circle className="circle" cx={props.radius} cy={props.radius} r={props.radius} stroke={props.strokeColor} strokeWidth={props.strokeWidth} strokeDasharray={dashArray} strokeDashoffset={dashOffset} strokeLinecap={props.strokeLinecap} fill='none' />
                </svg>

                <div className="circle-progress-content">
                    <div className="circle-progress-content-value">
                        {props.progressValue}
                    </div>

                    <div className="circle-progress-content-label">
                        {props.progressLabel}
                    </div>
                </div>
            </div>
        </div>
    );
};

CircleProgress.propTypes = {
    totalProgress: PropTypes.number,
    progressValue: PropTypes.number,
    progressLabel: PropTypes.string,
    radius: PropTypes.number,
    strokeWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    strokeBackgroundColor: PropTypes.string,
    strokeColor: PropTypes.string,
    strokeLinecap: PropTypes.string
}

CircleProgress.defaultProps = {
    totalProgress: 100,
    progressValue: 10,
    progressLabel: 'Progress',
    radius: 80,
    strokeWidth: 20,
    backgroundColor: '#FFFFFF',
    strokeBackgroundColor: '#C9E8B8',
    strokeColor: '#7AC74F',
    strokeLinecap: 'round'
}

export default CircleProgress;