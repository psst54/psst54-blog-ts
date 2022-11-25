import styles from "@styles/home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerMenu}>
        <a href="/post">
          <h2 className={styles.menuTitle}>blog</h2>
        </a>
        <a href="/about">
          <h2 className={styles.menuTitle}>about</h2>
        </a>
      </div>

      <a href="/">
        <h1 className={styles.title}>title</h1>
      </a>
    </div>
  );
};

export default Header;
