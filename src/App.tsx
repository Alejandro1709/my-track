import styles from './App.module.css';

function App() {
  return (
    <div className={styles.AppContainer}>
      <aside className={styles.AppSidebar}>Sidebar</aside>
      <main className={styles.AppMain}>
        <header className={styles.AppHeader}>Ingeniería de software</header>
      </main>
    </div>
  );
}

export default App;
