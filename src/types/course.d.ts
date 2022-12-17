export default interface ICourse {
  id: number | string;
  name: string;
  type: CourseType;
  color: CourseColor;
  credits: number;
  semester: number;
  status: CourseStatus;
}

export type CourseType =
  | 'Ciencias Básicas'
  | 'Humanidades'
  | 'Ciencias de la Computación';
export type CourseColor = { hex: string; name: string };

export type CourseStatus =
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'dropped'
  | 'failed'
  | 'not-started';
