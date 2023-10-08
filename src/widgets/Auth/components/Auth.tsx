import { LoginForm } from '@/features/Auth/Login';
import styles from './Auth.module.scss';
import { VectorSection } from './VectorSection/VectorSection';

export const AuthForm = () => {
  return (
    <div className={styles.authWrap}>
      <section className={styles.authSection}>
        <LoginForm />
      </section>
      <section className={styles.vectorSection}>
        <VectorSection />
      </section>
    </div>
  );
};
