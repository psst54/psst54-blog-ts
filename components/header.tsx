import styles from "@styles/home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerMenu}>
        <h2 className={styles.menuTitle}>blog</h2>
        <h2 className={styles.menuTitle}>about</h2>
      </div>

      <h1 className={styles.title}>title</h1>
    </div>
  );
};

export default Header;
