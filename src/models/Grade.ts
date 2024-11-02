import { Student } from './Student';
import { Evaluation } from './Evaluation';

export interface Grade {
    id?: number;
    student: Student;
    evaluation: Evaluation;
    score: number;
}
