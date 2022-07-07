import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/SemiCircleProgress.scss';

const SemiCircleProgress = (props) => {

    const [svgBox, setSvgBox] = useState('0 0 100 100');
    const [drawPath, setDrawPath] = useState('');
    const [dashArray, setDashArray] = useState(0);
    const [dashOffset, setDashOffset] = useState(0);

    useLayoutEffect(() => {
        const cx = props.strokeWidth / 2
        const cy = props.strokeWidth / 2
        const w = 2 * props.radius + props.strokeWidth
        const h = props.radius + props.strokeWidth
        setSvgBox(`-${cx} -${cy} ${w} ${h}`)
    }, [props.radius, props.strokeWidth]);

    useLayoutEffect(() => {
        const d = `M${props.radius * 2} ${props.radius} A${props.radius} ${props.radius} 0 0 0 0 ${props.radius}`
        setDrawPath(d)
    }, [props.radius]);

    useLayoutEffect(() => {
        const dash = (3.14 * 2 * props.radius) / 2;
        setDashArray(dash)
    }, [props.radius]);

    useLayoutEffect(() => {
        const offset = dashArray * ((props.progressValue > props.totalProgress ? props.totalProgress: props.progressValue) / props.totalProgress) + (3.14 * 2 * props.radius) / 2      
        setDashOffset(offset)
    }, [props.progressValue, dashArray, props.totalProgress, props.radius]);

    return (
        <div className="semi-circle-progress-wrapper">
            <div className="semi-circle-progress">
                <svg className="svg-progress" viewBox={svgBox} width={2 * props.radius * props.strokeWidth} height={2 * props.radius + props.strokeWidth}>
                    <path fill={props.backgroundColor} strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} stroke={props.strokeBackgroundColor} d={drawPath} />
                    <path className="semi-circle" fillOpacity="0" strokeWidth={props.strokeWidth} strokeLinecap={props.strokeLinecap} stroke={props.strokeColor} strokeDasharray={dashArray} strokeDashoffset={dashOffset} d={drawPath} />
                </svg>

                <div className="semi-progress-content">
                    <div className="semi-progress-content-value">
                        {props.progressValue}
                    </div>

                    <div className="semi-progress-content-label">
                        {props.progressLabel}
                    </div>
                </div>
            </div>
        </div>
    );
};

SemiCircleProgress.propTypes = {
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

SemiCircleProgress.defaultProps = {
    totalProgress: 100,
    progressValue: 10,
    progressLabel: 'Progress',
    radius: 50,
    strokeWidth: 10,
    backgroundColor: '#FFFFFF',
    strokeBackgroundColor: '#C9E8B8',
    strokeColor: '#7AC74F',
    strokeLinecap: 'round'
}

export default SemiCircleProgress;