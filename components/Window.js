import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Window.module.css';

const windowVariants = {
  start: {
    width: 0,
  },
  end: {
    width: "5vw",
    borderTop: "2px solid #000",
    borderBottom: "2px solid #000",
    transition: {
      delay: 2,
      duration: .5
    }
  }
}

const Window = ({ children }) => {
  return (
    <motion.div
      className={styles.container}
    >
      <motion.div
        variants={windowVariants}
        initial="start"
        animate="end"
        className={styles.window}
      >
        { children }
      </motion.div>
    </motion.div>
  )
}

export default Window
