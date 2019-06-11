import { createStore } from 'global-hook-store';

import { Question } from '@src/common/models/question';

import { FormBuilderStore } from './models';

const localStore = window.localStorage.getItem('store');
const parsedLocalStore = localStore !== null && JSON.parse(localStore);

const initialState: FormBuilderStore = {
    questions: localStore ? parsedLocalStore.questions : [],
    appState: localStore ? parsedLocalStore.appState : '',
};

export const saveState = (state: FormBuilderStore): void => {
    window.localStorage.setItem('store', JSON.stringify(state));
};

export const store = createStore({ ...initialState } as FormBuilderStore, {
    addQuestion: (store, payload: Question) => ({
        ...store,
        questions: [...store.questions, payload],
    }),
});
