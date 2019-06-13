import React, { useState, FormEvent } from 'react';
import styled from '@emotion/styled';
import useStore from 'global-hook-store';

import db from '@src/common/db';
import { store } from '@src/store';
import { formData } from '@src/data/config';
import { Question } from '@src/common/models/question';
import { QuestionInput } from 'Components/QuestionForm/QuestionInput';

import { ConditionInput } from './ConditionInput';
import { TypeInput } from './TypeInput';

const QuestionFormWrapper = styled.div`
    padding: 1rem;
    border: solid 1px gray;
    width: 500px;
`;
interface QuestionFormInterface {
    handleAddQuestionText: Function;
    question: Question;
}

export const QuestionForm: React.FC<QuestionFormInterface> = ({
    handleAddQuestionText,
    question,
}: QuestionFormInterface) => {
    const [newQuestion, setQuestion] = useState({
        id: question.id || -1,
        text: question.text || '',
        type: question.type || '',
        questionType: '',
        questionValue: '',
        children: [],
    });

    const [isUpdated, setIsUpdated] = useState(false);

    const { actions } = useStore(store);

    const { questionInput } = formData;

    const handleSaveForm = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        db.questions.update(question.id, { ...newQuestion }).then(id => {
            actions.saveForm({ id, question: newQuestion });
            setIsUpdated(false);
        });
    };

    return (
        <QuestionFormWrapper>
            <form onSubmit={handleSaveForm}>
                <ConditionInput />
                <QuestionInput
                    id={question.id}
                    label={questionInput.label}
                    placeholder={questionInput.placeholder}
                    updateQuestionText={(text: string) => {
                        setIsUpdated(true);
                        setQuestion({ ...newQuestion, text });
                    }}
                    value={newQuestion.text}
                />
                <TypeInput />
                <button type="submit" disabled={!isUpdated}>
                    SAVE
                </button>
                <button onClick={() => handleAddQuestionText(question.text)}>ADD</button>
                <button>DELETE</button>
            </form>
        </QuestionFormWrapper>
    );
};
