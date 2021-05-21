import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css';


const Layout = ({ children }) => {
  return (
    <>
    <Meta />
      <Nav />
      <div className={styles.container} id="carousel">
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
