import type ICourse from '../../types/course';
import ListItem from '../ListItem';
import styles from './List.module.css';

const courses: ICourse[] = [
  {
    id: 1,
    name: 'Comprensión y Producción de Lenguaje I',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 2,
    name: 'Matemática Básica',
    type: 'Ciencias Básicas',
    color: { hex: '#A3D39C', name: 'green' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 3,
    name: 'Introducción a los Algoritmos',
    type: 'Ciencias de la Computación',
    color: { hex: '#C1C5C7', name: 'darkGray' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 4,
    name: 'Ética y Ciudadanía',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
  {
    id: 5,
    name: 'Creatividad y Liderazgo (Ing)',
    type: 'Humanidades',
    color: { hex: '#F4B084', name: 'orange' },
    credits: 4,
    semester: 1,
    status: 'completed',
  },
];

function List() {
  return (
    <ul className={styles.List} role='list'>
      {courses.map((course) => (
        <ListItem key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default List;
