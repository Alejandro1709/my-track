import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import TermItem from '../TermItem';
import useTerms from '../../hooks/useTerms';
import styles from './TermMenu.module.css';

function TermMenu() {
  const { allTerms } = useTerms();

  useLockBodyScroll();

  return (
    <header className={styles.Window__header}>
      <ul role='menubar'>
        {allTerms.map((term) => (
          <TermItem key={term.id} term={term} />
        ))}
      </ul>
    </header>
  );
}

export default TermMenu;
