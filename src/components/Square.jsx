import styles from './Square.module.css';

export default function Square({ value, onClickSquare }) {
  return (
    <button
      style={{ color: value === 'X' ? '#E3371E' : '#103778' }}
      onClick={onClickSquare}
      type="button"
      className={styles.square}
    >
      {value}
    </button>
  );
}
