import React from 'react';

import { Container, Label } from './styles';
import { ConditionTypeInput } from './ConditionTypeInput';
import { ConditionTypeValue } from './ConditionTypeValue';

export const ConditionInput: React.FC = () => (
    <Container>
        <Label>Condition</Label>
        <div>
            <ConditionTypeInput type={'number'} />
            <ConditionTypeValue type={'text'} />
        </div>
    </Container>
);
