import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import styles from './TermMenu.module.css';
import { type ITerm } from '../../types/course';

type TermMenuProps = {
  terms: ITerm[];
};

function TermMenu({ terms }: TermMenuProps) {
  useLockBodyScroll();

  return (
    <header className={styles.Window__header}>
      <ul role='menubar'>
        {terms.map((term) => (
          <li key={term.id}>{term.name}</li>
        ))}
      </ul>
    </header>
  );
}

export default TermMenu;
