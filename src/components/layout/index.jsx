import React from 'react'
import styles from './styles.module.css'

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            AAA
            {children}
        </main>
    </div>
  )
}

export default Layout