import React from 'react';
import { Chart } from "react-google-charts";
export default ({
    data,
    height
}) => {
    return (
        <>
            {data ? <Chart
                height={height}
                chartType="ColumnChart"
                loader={<div>Loading Chart</div>}
                data={[
                ['Category Expanse', 'Total Expanses', 'Expanse Limits'],
                ...data
                ]}
                options={{
                title: 'Categorical Expanses vs Limits',
                chartArea: { width: '30%' },
                hAxis: {
                    title: 'Expanse Category',
                    minValue: 0,
                },
                vAxis: {
                    title: 'Expanses(In INR)',
                },
                }}
                legendToggle
            /> : null }
        </>
    );
};
