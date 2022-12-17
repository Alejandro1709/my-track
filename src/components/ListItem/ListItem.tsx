import type ICourse from '../../types/course';
import styles from './ListItem.module.css';

type ListItemProps = {
  course: ICourse;
};

function ListItem({ course }: ListItemProps) {
  const renderCourseColor = (course: ICourse) => {
    return course.color.hex;
  };

  return (
    <li
      className={styles.ListItem}
      style={{ backgroundColor: renderCourseColor(course) }}
      role='listitem'
    >
      <h3>{course.name}</h3>
    </li>
  );
}

export default ListItem;