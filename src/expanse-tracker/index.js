import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap';
import ExpansePieChart from './expanse-pie-chart';
import ExpansesVsLimitBarChart from './expanse-vs-limit-bar-chart';
import useExpanseTrackEvent from './useExpanseTrackEvent';
export default () => {
    
    const [expanses, categoricalExpansesWithLimits] = useExpanseTrackEvent();
    const [graphHeight] = useState('100vh');
    return (
        <>
            <Row>
                <Col xs={12} md={4} lg={4}>
                    <ExpansePieChart data={expanses} height={graphHeight}/>
                </Col>
                <Col xs={12} md={8} lg={8}>
                    <ExpansesVsLimitBarChart data={categoricalExpansesWithLimits} height={graphHeight}/>
                </Col>
            </Row>
        </>
    );
};
