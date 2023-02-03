import type ICourse from '../../types/course';
import styles from './Course.module.css';

type CourseProps = {
  course: ICourse;
};

function Course({ course }: CourseProps) {
  return (
    <div
      key={course.id}
      className={styles.CourseCell}
      style={{ backgroundColor: course.color }}
    >
      <h3>{course.name}</h3>
    </div>
  );
}

export default Course;
