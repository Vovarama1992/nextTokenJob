import styles from  './page.module.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.mainBody}>{children}</body>
    </html>
  )
}
