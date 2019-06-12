import React from 'react';
import useStore from 'global-hook-store';

import { store } from '@src/store';
import db from '@src/common/db';

import { QuestionForm } from 'Components/QuestionForm/QuestionForm';

export const Create: React.FC = () => {
    const { state, actions } = useStore(store);

    const handleAddQuestion = (): void => {
        db.questions.add({ text: 'test' }).then(id => actions.addQuestion({ id, text: 'test' }));
    };

    return (
        <div>
            Create page
            {state.questions.length > 0 && <QuestionForm />}
            <button onClick={handleAddQuestion} />
        </div>
    );
};
