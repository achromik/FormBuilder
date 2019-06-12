import React from 'react';
import useStore from 'global-hook-store';
import ReactJSON from 'react-json-view';

import { store } from '@src/store';

export const Export: React.FC = () => {
    const { state } = useStore(store);

    return (
        <div>
            <p>Export</p>

            <ReactJSON
                src={state}
                name={false}
                theme="summerfruit:inverted"
                displayDataTypes={false}
                sortKeys={true}
            />
        </div>
    );
};

export const Home: React.FC = () => <div>Export </div>;
