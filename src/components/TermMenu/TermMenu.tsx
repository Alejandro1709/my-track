import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import styles from './TermMenu.module.css';
import { type ITerm } from '../../types/course';
import TermItem from '../TermItem';

type TermMenuProps = {
  terms: ITerm[];
  selectedTerm: number;
  onTermChange: (term: ITerm) => void;
};

function TermMenu({ terms, onTermChange }: TermMenuProps) {
  useLockBodyScroll();

  return (
    <header className={styles.Window__header}>
      <ul role='menubar'>
        {terms.map((term) => (
          <TermItem key={term.id} term={term} onTermChange={onTermChange} />
        ))}
      </ul>
    </header>
  );
}

export default TermMenu;
