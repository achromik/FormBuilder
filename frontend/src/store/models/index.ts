import { Question } from '@src/common/models/question';

interface Answers<Id, Msg> {
    id: Id;
    answer: Msg;
}
export interface FormBuilderStore {
    questions: Question[];
    answers: Answers<string, string>[];
    appState: string;
}
