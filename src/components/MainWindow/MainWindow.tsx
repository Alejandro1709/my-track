import { useState } from 'react';
import { terms } from '../../data';
import { type ITerm } from '../../types/course';
import TermMenu from '../TermMenu';
import styles from './MainWindow.module.css';

function MainWindow() {
  const [allTerms, setAllTerms] = useState<ITerm[]>(terms);

  return (
    <div className={styles.Window}>
      <section className={styles.Window__content}>
        <TermMenu terms={allTerms} />
        ffkfk
      </section>
      fkfk
    </div>
  );
}

export default MainWindow;
