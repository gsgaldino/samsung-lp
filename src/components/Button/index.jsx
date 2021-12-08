import styles from './index.module.css';

export default function Button({
  label,
  type,
  children
}) {
  return (
    <button 
      className={`
        ${styles.button}
        ${type && type === "primary" ? styles.primary : ""}
      `}
    >
      {children}
    </button>
  );
};
