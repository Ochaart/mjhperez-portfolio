import React from 'react'
import styles from '../styles/Scroll.module.css'
import { motion } from 'framer-motion'

const Scroll = ({ inView }) => {
  const dotVariants = {
    start: {
      y: -10,
      opacity: [0,0],
     },
    end: {
      y: 0,
      opacity: [1, 1, 1, 0, 0, 0],
    },
  }
  const mouseVariants = {
    start: { y: 0 },
    end: { y: 5 },
  }

  return (
    <motion.div
      animate={inView ? {opacity: 1} : {opacity: 0}}
      className={styles.scrollWrapper}>
      <motion.div
        variants={mouseVariants}
        initial="start"
        animate="end"
        transition={{ yoyo: 'Infinity', duration: 1 }}
        className={styles.mouse}>
        <motion.p
          variants={dotVariants}
          transition={{ yoyo: 'Infinity', duration: 1 }}
        >.</motion.p>
      </motion.div>
      <p>Scroll</p>
    </motion.div>
  )
}

export default Scroll
