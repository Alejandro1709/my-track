import CompletedCourse from '../Course/CompletedCourse';
import Course from '../Course';
import styles from './Courses.module.css';
import useModal from '../../hooks/useModal';
import ICourse, { type ITerm } from '../../types/course';
import useCourses from '../../hooks/useCourses';

type CoursesProps = {
  allTerms: ITerm[];
  selectedTerm: number;
};

function Courses({ allTerms, selectedTerm }: CoursesProps) {
  const { handleCourseChange } = useCourses();
  const { handleModalChange } = useModal();

  const handleCourseClick = (course: ICourse) => {
    handleCourseChange(course);
    handleModalChange();
  };

  return (
    <div className={styles.Window__content__main}>
      {allTerms.length > 0
        ? allTerms[selectedTerm - 1].courses.map((course) => {
            return course.status === 'completed' ? (
              <CompletedCourse
                key={course.id}
                course={course}
                onClick={() => handleCourseClick(course)}
              />
            ) : (
              <Course
                key={course.id}
                course={course}
                onClick={() => handleCourseClick(course)}
              />
            );
          })
        : null}
    </div>
  );
}

export default Courses;
