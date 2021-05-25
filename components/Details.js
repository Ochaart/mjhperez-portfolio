import styles from '../styles/Details.module.css'
import useOnScreen from '../hooks/useOnScreen';
import { useRef, useState } from 'react'

const Details = ({ children }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <div ref={ref} className={styles.details}>
      <p>{onScreen && 'Im on screen!'}</p>
      {children}
    </div>
  )
}

export default Details
