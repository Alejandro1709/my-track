import styles from './MainWindow.module.css';

function MainWindow() {
  return (
    <div className={styles.Window}>
      <ul className={styles.List} role='list'>
        <li className={styles.ListItem} role='listitem'>
          <h3>Course Name</h3>
        </li>
        <li className={styles.ListItem} role='listitem'>
          <h3>Course Name</h3>
        </li>
        <li className={styles.ListItem} role='listitem'>
          <h3>Course Name</h3>
        </li>
        <li className={styles.ListItem} role='listitem'>
          <h3>Course Name</h3>
        </li>
      </ul>
    </div>
  );
}

export default MainWindow;
