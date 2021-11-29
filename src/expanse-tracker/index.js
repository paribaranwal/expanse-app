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
                <Col xs={12} md={5} lg={5}>
                    <ExpansePieChart data={expanses} height={graphHeight}/>
                </Col>
                <Col xs={12} md={7} lg={7}>
                    <ExpansesVsLimitBarChart data={categoricalExpansesWithLimits} height={graphHeight}/>
                </Col>
            </Row>
        </>
    );
};
