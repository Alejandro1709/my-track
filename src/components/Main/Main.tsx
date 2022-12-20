import styles from './Main.module.css';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return <main className={styles.Main}>{children}</main>;
}

export default Main;
