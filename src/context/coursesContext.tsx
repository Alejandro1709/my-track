/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import type ICourse from '../types/course';

type CoursesContext = {
  selectedCourse?: ICourse;
  handleCourseChange: (course: ICourse) => void;
};

type CoursesProviderProps = {
  children: React.ReactNode;
};

export const CoursesContext = createContext<CoursesContext>({
  selectedCourse: undefined,
  handleCourseChange: () => {},
});

function CoursesProvider({ children }: CoursesProviderProps) {
  const [selectedCourse, setSelectedCourse] = useState<ICourse>();

  function handleCourseChange(course: ICourse) {
    setSelectedCourse(course);
  }

  return (
    <CoursesContext.Provider
      value={{
        selectedCourse,
        handleCourseChange,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesProvider;
