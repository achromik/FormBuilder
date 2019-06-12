export interface Question {
    id?: number | string;
    text: string;
    type?: string;
    questionType?: string;
    questionValue?: string;
    children?: Question[];
}
