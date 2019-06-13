import React from 'react';

import { Container, Label, Input } from './styles';
import { ConditionType } from './models';

export const ConditionTypeValue: React.FC<ConditionType> = ({ type }: ConditionType) => (
    <>
        {type === 'radio' && (
            <select defaultValue="" required>
                <option value="" disabled>
                    Select a value...
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        )}
        {type !== 'radio' && <Input placeholder="Enter a value!" required />}
    </>
);
