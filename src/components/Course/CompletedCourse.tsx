import type ICourse from '../../types/course';
import styles from './Course.module.css';

type CourseProps = {
  course: ICourse;
};

function CompletedCourse({ course }: CourseProps) {
  return (
    <div
      key={course.id}
      className={styles.CourseCell}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
      }}
    >
      <h3
        style={{
          textDecoration: course.status === 'completed' ? 'line-through' : '',
        }}
      >
        {course.name}
      </h3>
      <span>Completed</span>
    </div>
  );
}

export default CompletedCourse;
