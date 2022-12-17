import List from '../List';
import styles from './MainWindow.module.css';

function MainWindow() {
  return (
    <div className={styles.Window}>
      <List />
    </div>
  );
}

export default MainWindow;
