import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/VerticalLine.module.css';

const verticalVariants = {
  hidden: {
      opacity: 0,
      height: 0,
      type: "none"
  },
  visible: {
      opacity: 1,
      height: "70vh",
      stiffness: 150,
      type: "spring",
      transition: {
          delay: .5,
          duration: 1.5,
      }
  },
}

const VerticalLine = () => {
  return (
    <div className={styles.verticalLineContainer}>
      <motion.div
        className={styles.verticalLine}
        initial="hidden"
        animate="visible"
        variants={verticalVariants}>
      </motion.div>
    </div>
  )
}

export default VerticalLine
