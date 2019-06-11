import React from 'react';
import { createStore, useLocalStore } from 'global-hook-store';

import { Question } from '@src/common/models/question';

interface Store {
    questions: Question[];
    appState: string;
}

export const store = createStore({ questions: [], appState: '' } as Store, {
    addQuestion: (store, payload: Question) => ({
        ...store,
        questions: [...store.questions, payload],
    }),
});
