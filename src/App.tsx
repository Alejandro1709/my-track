import AppContainer from './components/AppContainer';
import Main from './components/Main';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <AppContainer>
      <Main>
        <Modal />
        <Header />
        <MainWindow />
      </Main>
    </AppContainer>
  );
}

export default App;
