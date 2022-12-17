import AppContainer from './components/AppContainer';
import Sidebar from './components/Sidebar';
import styles from './App.module.css';

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <main className={styles.AppMain}>
        <header className={styles.AppHeader}>Ingeniería de software</header>
      </main>
    </AppContainer>
  );
}

export default App;
