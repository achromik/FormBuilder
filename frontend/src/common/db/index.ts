import Dexie from 'dexie';

import { Question } from '@src/common/models/question';

class FormBuilderDatabse extends Dexie {
    public questions: Dexie.Table<Question, number>;

    public constructor(databaseName: string) {
        super(databaseName);
        this.version(1).stores({
            questions: '++id, text, type, questionType, questionValue, children',
        });
        this.questions = this.table('questions');
    }
}

const db = new FormBuilderDatabse('FormBuilderStore');

db.open().catch(err => {
    // eslint-disable-next-line no-console
    console.error(`Open failed: ${err.stack}`);
});

export default db;
