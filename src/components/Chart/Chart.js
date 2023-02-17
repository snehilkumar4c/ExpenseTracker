import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValue = props.data.map(data => data.values);
    const totalMaximum = Math.max(...dataPointValue);

    return <div className="chart">
        {props.data.map((data) => (<ChartBar key={data.label} value={data.values} maxValue={totalMaximum} label={data.label} />))}
    </div>
};

export default Chart;