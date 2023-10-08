import Image from 'next/image';

import circle1 from '../../../../../public/vectors/circle1.svg';
import circle2 from '../../../../../public/vectors/circle2.svg';
import manAndWomen from '../../../../../public/images/manAndWomen.png';

import styles from './VectorSection.module.scss';

export const VectorSection = () => {
  return (
    <>
      <Image
        className={styles.circle1}
        src={circle1}
        width={740}
        height={740}
        alt=""
      />
      <Image
        className={styles.circle2}
        src={circle2}
        width={1050}
        height={1050}
        alt=""
      />
      <div className={styles.info}>
        <h1 className={styles.title}>Inverse - удобная платформа для проектов</h1>
        <Image className={styles.image} src={manAndWomen} width={577} height={577} alt="" />


      </div>
    </>
  );
};
