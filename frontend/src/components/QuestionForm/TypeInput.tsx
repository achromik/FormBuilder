import React from 'react';

import { Container, Label } from './styles';

export const TypeInput: React.FC = () => (
    <Container>
        <Label>Type</Label>
        <select defaultValue="" required>
            <option value="" disabled>
                Select a value...
            </option>
            <option value="text">Text</option>
            <option value="radio">Yes/No</option>
            <option value="number">Number</option>
        </select>
    </Container>
);
