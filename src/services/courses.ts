import axios from 'axios';
import type ICourse from '../types/course';

export const updateTerm = async (course: ICourse): Promise<ICourse> => {
  const { data } = await axios.patch(
    `http://localhost:4000/api/v1/courses/${course.slug}`,
    course
  );
  return data;
};
