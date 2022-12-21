/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { courses } from '../data';
import type ICourse from '../types/course';

interface ICoursesContext {
  courses: ICourse[];
  filteredCourses: ICourse[];
  setFilteredCourses: (courses: ICourse[]) => void;
}

export const CoursesContext = createContext<ICoursesContext>({
  courses: [],
  filteredCourses: [],
  setFilteredCourses: () => {},
});

type CoursesProviderProps = {
  children: React.ReactNode;
};

function CoursesProvider({ children }: CoursesProviderProps) {
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>(courses);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        filteredCourses,
        setFilteredCourses,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesProvider;
