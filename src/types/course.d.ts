export default interface ICourse {
  id: number | string;
  name: string;
  slug: string;
  type: CourseType;
  color: string;
  credits: number;
  semester: number;
  status: CourseStatus;
}

export interface ITerm {
  id: number | string;
  name: string;
  slug: string;
  courses: ICourse[];
}

export type CourseType =
  | 'Ciencias Básicas'
  | 'Humanidades'
  | 'Ciencias de la Computación'
  | 'Administración'
  | 'Ingeniería de Software'
  | 'Tecnologías de Información'
  | 'Práctica de la Profesión'
  | 'Electivo'
  | 'Otro';

export type CourseStatus =
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'dropped'
  | 'failed'
  | 'not-started';
