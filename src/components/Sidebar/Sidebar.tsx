import { useState } from 'react';
import { AiFillFilter, AiOutlineGroup } from 'react-icons/ai';
import styles from './Sidebar.module.css';

function Sidebar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleFilterClick() {
    setIsFilterOpen(!isFilterOpen);
    console.log('filter');
  }

  return (
    <aside className={styles.Sidebar}>
      <div className={styles.SidebarFilterBar}>
        <select className={styles.SidebarSelect} name='filter' id='filter'>
          <option value='all'>All</option>
          <option value='type'>Type</option>
          <option value='status'>Status</option>
          <option value='credits'>Credits</option>
        </select>
        <button className={styles.SidebarApply}>Apply</button>
      </div>
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
