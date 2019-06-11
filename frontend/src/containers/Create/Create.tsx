import React, { useEffect } from 'react';
import useStore from 'global-hook-store';

import { store, saveState } from '@src/store';

import { QuestionForm } from 'Components/QuestionForm/QuestionForm';

export const Create: React.FC = () => {
    const { state, actions } = useStore(store);

    useEffect(() => {
        saveState(state);
    }, [state]);

    return (
        <div>
            Create page
            {state.questions.length > 0 ? (
                <div>
                    <QuestionForm />
                    <button onClick={() => actions.addQuestion({ id: '2', text: 'test' })} />
                </div>
            ) : (
                <div>
                    <button
                        onClick={() => {
                            return actions.addQuestion({ id: '2', text: 'test' });
                        }}
                    />
                </div>
            )}
        </div>
    );
};
