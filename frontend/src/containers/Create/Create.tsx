import React, { useRef, useState } from 'react';
import useStore from 'global-hook-store';

import { store } from '@src/store';
import { QuestionForm } from 'Components/QuestionForm/QuestionForm';

export const Create: React.FC = () => {
    const { state, actions } = useStore(store);

    return (
        <div>
            Create page
            {state.questions.length > 0 ? (
                <div>
                    <QuestionForm />
                </div>
            ) : (
                <div>
                    <button onClick={() => actions.addQuestion({ id: '2', text: 'test' })} />
                </div>
            )}
        </div>
    );
};
