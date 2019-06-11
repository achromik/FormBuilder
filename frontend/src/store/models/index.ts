import { Question } from '@src/common/models/question';

export interface FormBuilderStore {
    questions: Question[];
    appState: string;
}
