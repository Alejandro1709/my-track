import { useContext } from 'react';
import { CoursesContext } from '../context/coursesContext';

export default function useCourses() {
  return useContext(CoursesContext);
}
