import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>© {new Date().getFullYear()} FakeStore</small>
    </footer>
  );
}