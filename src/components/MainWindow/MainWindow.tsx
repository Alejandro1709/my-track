import { courses } from '../../data';
import List from '../List';
import styles from './MainWindow.module.css';

function MainWindow() {
  return (
    <div className={styles.Window}>
      <List courses={courses} />
    </div>
  );
}

export default MainWindow;
