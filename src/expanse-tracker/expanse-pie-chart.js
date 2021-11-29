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
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Expanse', 'Last 7 Days'],
                    ...data
                ]}
                options={{
                    title: 'My Last 7 Days Expanses',
                    is3D: true,
                }}
                rootProps={{ 'data-testid': '1' }}
            /> : null}
        </>
    );
};