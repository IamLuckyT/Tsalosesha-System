export interface User {
  uid: string;
  email: string;
  fullName: string;
  role: 'ADMIN' | 'TEACHER' | 'STUDENT';
  schoolName?: string;
  country?: string;
  nationalId?: string;
  certificationUrl?: string;
}

export interface Curriculum {
  id: string;
  name: string;
  description: string;
}

export interface Level {
  id: string;
  curriculumId: string;
  name: string;
}

export interface Subject {
  id: string;
  levelId: string;
  name: string;
}

export interface Module {
  id: string;
  subjectId: string;
  name: string;
  description: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  videoUrl?: string;
  pdfUrl?: string;
  order: number;
}

export interface Enrollment {
  id: string;
  studentId: string;
  subjectId: string;
  progress: number;
  completed: boolean;
}

export interface Quiz {
  id: string;
  moduleId: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Submission {
  id: string;
  studentId: string;
  quizId: string;
  score: number;
  date: string;
}
