import React from 'react';
import useStore from 'global-hook-store';

import { store } from '@src/store';
import db from '@src/common/db';

import { QuestionForm } from 'Components/QuestionForm/QuestionForm';

export const Create: React.FC = () => {
    const { state, actions } = useStore(store);
    const { questions } = state;
    const handleAddQuestionText = (text: string): void => {
        db.questions.add({ id: -1, text }).then(id => actions.addQuestion({ id, text }));
    };

    return (
        <div>
            Create page
            {questions.map(question => (
                <QuestionForm
                    key={question.id}
                    question={question}
                    handleAddQuestionText={handleAddQuestionText}
                />
            ))}
            {/* <button onClick={handleAddQuestionText} /> */}
        </div>
    );
};
