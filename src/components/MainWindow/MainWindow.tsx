import TermCourses from '../TermCourses';
import TermMenu from '../TermMenu';
import styles from './MainWindow.module.css';

function MainWindow() {
  return (
    <>
      <section className={styles.Window__content}>
        <TermMenu />
        <TermCourses />
      </section>
    </>
  );
}

export default MainWindow;
