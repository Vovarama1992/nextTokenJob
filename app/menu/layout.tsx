import styles from '../page.module.scss';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
      <div className={styles.container}>
        <div className={styles.columnMenu}>
          <div className={styles.menu}>
            {children}
            </div>
        </div>
      </div>
    )
}