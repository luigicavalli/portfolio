import styles from './Footer.module.scss';


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.text}>
          © Luigi Cavalli - {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
