import styles from '../styles/Details.module.css'

const Details = ({ children }) => {
  return (
    <div className={styles.details}>
      {children}
    </div>
  )
}

export default Details
