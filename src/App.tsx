import AppContainer from './components/AppContainer';
import styles from './App.module.css';

function App() {
  return (
    <AppContainer>
      <aside className={styles.AppSidebar}>Sidebar</aside>
      <main className={styles.AppMain}>
        <header className={styles.AppHeader}>Ingeniería de software</header>
      </main>
    </AppContainer>
  );
}

export default App;
