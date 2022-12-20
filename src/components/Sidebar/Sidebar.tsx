import { AiFillFilter, AiOutlineGroup } from 'react-icons/ai';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.Sidebar}>
      <div className={styles.SidebarInner}>
        <div className={styles.SidebarLogo}>LOGO</div>
        <div className={styles.SidebarActions}>
          <div className={styles.Filter}>
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
