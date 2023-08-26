import styles from "./HeaderLocal.module.css"

export function HeaderLocal() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <section className={styles.logo}>
            <h1 className={styles.h1}>Full Grid</h1>
          </section>
          <nav className={styles.nav}>
            <a className={styles.navlink} href="/type">
              Home
            </a>
            <a className={styles.navlink} href="/type">
              About
            </a>
            <a className={styles.navlink} href="/type">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
