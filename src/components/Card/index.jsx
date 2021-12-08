import styles from './index.module.css';

export default function Card({ image, heading, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.heading}>
        {heading}
      </div>
      <div className={styles.image}>
        <img src={image} alt="Card"/>
      </div>
    </div>
  );
};
