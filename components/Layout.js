import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
    <Meta />
      <div className={styles.container}>
          {children}
      </div>
    </>
  )
}

export default Layout
