import * as React from 'react';

import { Container, Label, Input } from './styles';
import { SetStateFunction } from 'global-hook-store';
interface QuestionInput {
    label?: string;
    placeholder?: string;
    updateQuestionText: SetStateFunction;
    value?: string;
    id?: number | string;
}

export const QuestionInput: React.FC<QuestionInput> = ({
    label = '',
    placeholder = '',
    updateQuestionText,
    value,
    id,
}: QuestionInput) => (
    <Container>
        <Label>{label}</Label>
        <Input
            type="text"
            placeholder={placeholder}
            onChange={e => updateQuestionText(e.target.value)}
            value={value}
        />
    </Container>
);
