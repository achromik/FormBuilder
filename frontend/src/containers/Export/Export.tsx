import React from 'react';
import useStore from 'global-hook-store';

import { store } from '@src/store';

export const Export: React.FC = () => {
    const { state } = useStore(store);

    return (
        <div>
            <p>Export</p>

            <pre>{JSON.stringify(state)}</pre>
        </div>
    );
};

export const Home: React.FC = () => <div>Export </div>;
