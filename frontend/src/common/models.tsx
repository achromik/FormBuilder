export interface Question {
    id: string
    text: string
    type?: string
    questionType?: string
    questionValue?: string
    children?: Question[]
}
