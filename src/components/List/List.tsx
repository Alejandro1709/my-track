import ListItem from '../ListItem';
import type ICourse from '../../types/course';
import styles from './List.module.css';

type ListProps = {
  courses: ICourse[];
};

function List({ courses }: ListProps) {
  return (
    <ul className={styles.List} role='list'>
      {courses.map((course) => (
        <ListItem key={course.id} course={course} />
      ))}
    </ul>
  );
}

export default List;
