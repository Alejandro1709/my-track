import type ICourse from '../../types/course';
import styles from './Course.module.css';

type CourseProps = {
  course: ICourse;
  onClick: () => void;
};

function Course({ course, onClick }: CourseProps) {
  return (
    <div
      key={course.id}
      className={styles.CourseCell}
      style={{ backgroundColor: course.color }}
      onClick={onClick}
    >
      <h3>{course.name}</h3>
    </div>
  );
}

export default Course;
