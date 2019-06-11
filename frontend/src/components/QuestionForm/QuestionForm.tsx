import * as React from 'react';
import styled from '@emotion/styled';

import { formData } from '@src/data/config';
import { LabeledInput } from 'Components/LabeledInput';

const QuestionFormWrapper = styled.div`
    padding: 1rem;
    border: solid 1px gray;
    width: 500px;
`;
export const QuestionForm: React.FC = () => {
    const { question } = formData;
    return (
        <QuestionFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <LabeledInput label={question.label} placeholder={question.placeholder} />
                <button>Test</button>
            </form>
        </QuestionFormWrapper>
    );
};
