import { createContext } from 'react';
import { courses } from '../data';
import type ICourse from '../types/course';

interface ICoursesContext {
  courses: ICourse[];
}

export const CoursesContext = createContext<ICoursesContext>({
  courses: [],
});

type CoursesProviderProps = {
  children: React.ReactNode;
};

function CoursesProvider({ children }: CoursesProviderProps) {
  return (
    <CoursesContext.Provider
      value={{
        courses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesProvider;
