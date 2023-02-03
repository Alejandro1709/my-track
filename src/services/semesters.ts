import axios from 'axios';
import { type ITerm } from '../types/course';

export const fetchTerms = async (): Promise<ITerm[]> => {
  const { data } = await axios.get('http://localhost:4000/api/v1/semesters');
  return data;
};
