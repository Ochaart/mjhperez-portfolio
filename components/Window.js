import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Window.module.css';
import Image from 'next/image';

const windowVariants = {
  start: {
    // height: 0,
    width: 0,
  },
  end: {
    // height: "25vh",
    width: "5vw",
    borderTop: "2px solid #000",
    borderBottom: "2px solid #000",
    transition: {
      delay: 2,
      duration: .5
    }
  }
}

const Window = () => {
  return (
    <motion.div
      // variants={windowVariants}
      // initial="start"
      // animate="end"
      className={styles.container}
    >
      <motion.div
        variants={windowVariants}
        initial="start"
        animate="end"
        className={styles.window}
      >
      </motion.div>
    </motion.div>
  )
}

export default Window
