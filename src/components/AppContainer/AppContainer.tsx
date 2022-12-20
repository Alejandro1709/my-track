import styles from './AppContainer.module.css';

type AppContainerProps = {
  children: React.ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
  return <div className={styles.AppContainer}>{children}</div>;
}

export default AppContainer;
