import useTerms from '../../hooks/useTerms';
import styles from './TermCourses.module.css';

function TermCourses() {
  const { allTerms, selectedTerm } = useTerms();

  return (
    <div className={styles.Window__content__main}>
      {allTerms[selectedTerm].courses.map((course) => {
        return course.status === 'completed' ? (
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
                textDecoration:
                  course.status === 'completed' ? 'line-through' : '',
              }}
            >
              {course.name}
            </h3>
            <span>Completed</span>
          </div>
        ) : (
          <div
            key={course.id}
            className={styles.CourseCell}
            style={{ backgroundColor: course.color.hex }}
          >
            <h3>{course.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default TermCourses;
