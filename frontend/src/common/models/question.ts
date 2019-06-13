export interface Question {
    id: number;
    text: string;
    type?: string;
    questionType?: string;
    questionValue?: string;
    children?: Question[];
}
