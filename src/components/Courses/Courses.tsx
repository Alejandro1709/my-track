import CompletedCourse from '../Course/CompletedCourse';
import Course from '../Course/Course';
import styles from './Courses.module.css';
import { type ITerm } from '../../types/course';

type CoursesProps = {
  allTerms: ITerm[];
  selectedTerm: number;
};

function Courses({ allTerms, selectedTerm }: CoursesProps) {
  return (
    <div className={styles.Window__content__main}>
      {allTerms.length > 0
        ? allTerms[selectedTerm].courses.map((course) => {
            return course.status === 'completed' ? (
              <CompletedCourse key={course.id} course={course} />
            ) : (
              <Course key={course.id} course={course} />
            );
          })
        : null}
    </div>
  );
}

export default Courses;
