import { courses } from '../../data';
import ListItem from '../ListItem';
import styles from './List.module.css';

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
