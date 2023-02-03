import type ICourse from '../../types/course';
import styles from './ListItem.module.css';

type ListItemProps = {
  course: ICourse;
};

function ListItem({ course }: ListItemProps) {
  return (
    <li
      className={
        course.status === 'completed'
          ? styles.ListItem
          : styles.ListItem__incomplete
      }
      style={{ backgroundColor: `#${course.color};` }}
      role='listitem'
    >
      <h3>{course.name}</h3>
    </li>
  );
}

export default ListItem;
