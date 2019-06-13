import React from 'react';

import { ConditionType } from './models';

export const ConditionTypeInput: React.FC<ConditionType> = ({ type }: ConditionType) => (
    <select defaultValue="" required>
        <option value="" disabled>
            Select value...
        </option>
        <option value="eq">Equal</option>
        {type === 'number' && (
            <>
                <option value="gt">Greater than</option>
                <option value="lt">Less than</option>
            </>
        )}
    </select>
);
