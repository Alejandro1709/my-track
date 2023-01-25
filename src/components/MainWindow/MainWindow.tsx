import TermMenu from '../TermMenu';
import styles from './MainWindow.module.css';

function MainWindow() {
  return (
    <div className={styles.Window}>
      <div className={styles.Window__content}>
        <TermMenu />
        fg
      </div>
    </div>
  );
}

export default MainWindow;
