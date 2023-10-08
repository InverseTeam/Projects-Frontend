import { SideBar } from '@/widgets/SideBar';
import styles from './MainLayout.module.scss'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.mainLayout}>
      <SideBar />
      {children}
    </div>
  );
};
