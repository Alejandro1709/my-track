import { useContext } from 'react';
import { CoursesContext } from '../../context/coursesContext';
import List from '../List';
import styles from './MainWindow.module.css';

function MainWindow() {
  const { courses } = useContext(CoursesContext);
  return (
    <div className={styles.Window}>
      <List courses={courses} />
    </div>
  );
}

export default MainWindow;
