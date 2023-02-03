import CompletedCourse from '../Course/CompletedCourse';
import Course from '../Course';
import styles from './Courses.module.css';
import useModal from '../../hooks/useModal';
import { type ITerm } from '../../types/course';

type CoursesProps = {
  allTerms: ITerm[];
  selectedTerm: number;
};

function Courses({ allTerms, selectedTerm }: CoursesProps) {
  const { handleModalChange } = useModal();

  return (
    <div className={styles.Window__content__main}>
      {allTerms.length > 0
        ? allTerms[selectedTerm - 1].courses.map((course) => {
            return course.status === 'completed' ? (
              <CompletedCourse
                key={course.id}
                course={course}
                onClick={handleModalChange}
              />
            ) : (
              <Course
                key={course.id}
                course={course}
                onClick={handleModalChange}
              />
            );
          })
        : null}
    </div>
  );
}

export default Courses;
