import styles from "@styles/home.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.headerMenu}>
        <li className={styles.menuTitle}>
          <span className={styles.highlight}>
            <a href="/post">blog</a>
          </span>
        </li>

        <li className={styles.menuTitle}>
          <span className={styles.highlight}>
            <a href="/about">about</a>
          </span>
        </li>
      </ul>

      <a href="/">
        <h1 className={styles.title}>title</h1>
      </a>
    </div>
  );
};

export default Header;
