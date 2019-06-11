import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
    padding: 0.5rem;
`;

const Label = styled.label`
    padding-right: 2rem;
    font-size: 0.75rem;
`;
const Input = styled.input`
    flex: 1;
`;

interface LabeledInput {
    label?: string;
    placeholder?: string;
}

export const LabeledInput: React.FC<LabeledInput> = ({
    label = '',
    placeholder = '',
}: LabeledInput) => (
    <Container>
        <Label>{label}</Label>
        <Input type="text" placeholder={placeholder} />
    </Container>
);
