import React from 'react';
import styled from '@emotion/styled';

import { formData } from '@src/data/config';
import { QuestionInput } from 'Components/QuestionForm/QuestionInput';

const QuestionFormWrapper = styled.div`
    padding: 1rem;
    border: solid 1px gray;
    width: 500px;
`;
export const QuestionForm: React.FC = () => {
    const { questionInput } = formData;
    return (
        <QuestionFormWrapper>
            <form onSubmit={e => e.preventDefault()}>
                <QuestionInput
                    label={questionInput.label}
                    placeholder={questionInput.placeholder}
                />
                <button>ADD</button>
            </form>
        </QuestionFormWrapper>
    );
};
