import AppContainer from './components/AppContainer';
import Main from './components/Main';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import Modal from './components/Modal/Modal';
import useModal from './hooks/useModal';

function App() {
  const { isOpen } = useModal();

  return (
    <AppContainer>
      <Main>
        {isOpen ? <Modal isOpen={isOpen} /> : null}
        <Header />
        <MainWindow />
      </Main>
    </AppContainer>
  );
}

export default App;
