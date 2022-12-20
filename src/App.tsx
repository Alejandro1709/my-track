import AppContainer from './components/AppContainer';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';
import MainWindow from './components/MainWindow';

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Main>
        <Header />
        <MainWindow />
      </Main>
    </AppContainer>
  );
}

export default App;
