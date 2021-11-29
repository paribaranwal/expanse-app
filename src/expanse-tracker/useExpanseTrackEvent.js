import { useEffect, useState } from 'react';
import { EXPANSE_TRACK_EVENT_URL } from '../urls';
export default () => {
    const [expanses, setExpanses] = useState(null);
    const [categoricalExpansesWithLimits, setCategoricalExpansesWithLimits] = useState(null);
    useEffect(() => {
        const defaultResponse = {
            'entertainment': {
                label: 'Entertainment',
                value: 1100,
                limit: 1000
            },
            'pharmacy': {
                label: 'Pharmacy',
                value: 200,
                limit: 500
            },
            'groceries': {
                label: 'Groceries',
                value: 800,
                limit: 1200
            },
            'fashion': {
                label: 'Fashion',
                value: 400,
                limit: 1000
            }
        };
        getRealTimeExpanses(defaultResponse);
        let expanseTrackEvent = new EventSource(EXPANSE_TRACK_EVENT_URL);
        function getRealTimeExpanses(data) {
            setExpanses(Object.keys(data).map(type => {
                return [data[type].label, data[type].value]
            }));
            setCategoricalExpansesWithLimits(Object.keys(data).map(type => {
                return [data[type].label, data[type].value, data[type].limit]
            }));
        }
        expanseTrackEvent.onmessage = e => getRealTimeExpanses(JSON.parse(e.data));
        expanseTrackEvent.onerror = () => {
            expanseTrackEvent.close();
        }
        return () => {
            expanseTrackEvent.close();
        };
    }, []);
    return [expanses, categoricalExpansesWithLimits];
};
