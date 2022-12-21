import { useState } from 'react';
import { AiFillFilter, AiOutlineGroup } from 'react-icons/ai';
import FilterBar from '../Filterbar';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleFilterClick() {
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <aside className={styles.Sidebar}>
      {isFilterOpen ? (
        <FilterBar onFilterApply={() => setIsFilterOpen(false)} />
      ) : null}
      <div className={styles.SidebarInner}>
        <div className={styles.SidebarLogo}>LOGO</div>
        <div className={styles.SidebarActions}>
          <div className={styles.Filter} onClick={handleFilterClick}>
            <AiFillFilter />
          </div>
          <div className={styles.Order}>
            <AiOutlineGroup />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
