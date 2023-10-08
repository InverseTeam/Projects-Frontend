import { MainDataSection } from './MainDataSection';

import styles from './Profile.module.scss'

export const Profile = () => {
  return (
    <div className={styles.profileWrap}>
      <MainDataSection />
    </div>
  );
};
