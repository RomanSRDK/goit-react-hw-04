import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ tapOnBtn }) {
  return (
    <button type="button" onClick={tapOnBtn} className={styles.button}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
