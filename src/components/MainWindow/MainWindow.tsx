import { useState } from 'react';
import { terms } from '../../data';
import { type ITerm } from '../../types/course';
import TermCourses from '../TermCourses';
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
        <TermCourses allTerms={allTerms} selectedTerm={selectedTerm} />
      </section>
    </>
  );
}

export default MainWindow;
