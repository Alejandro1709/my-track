import { useState } from 'react';
import { terms } from '../../data';
import { type ITerm } from '../../types/course';
import TermMenu from '../TermMenu';
import styles from './MainWindow.module.css';

function MainWindow() {
  const [allTerms, setAllTerms] = useState<ITerm[]>(terms);
  const [selectedTerm, setSelectedTerm] = useState<number>(0);

  const handleTermChange = (term: ITerm) => {
    setSelectedTerm(+term.id);
  };

  return (
    <>
      <section className={styles.Window__content}>
        <TermMenu
          terms={allTerms}
          selectedTerm={selectedTerm}
          onTermChange={handleTermChange}
        />
        <div className={styles.Window__content__main}>
          {allTerms[selectedTerm].courses.map((course) => {
            return course.status === 'completed' ? (
              <div
                key={course.id}
                className={styles.CourseCell}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  textDecoration: 'line-through',
                  backgroundColor: '#eee',
                }}
              >
                {course.name}
                <span>Completed</span>
              </div>
            ) : (
              <div
                key={course.id}
                className={styles.CourseCell}
                style={{ backgroundColor: course.color.hex }}
              >
                {course.name}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default MainWindow;
