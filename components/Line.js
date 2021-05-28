import React from 'react'
import styles from '../styles/Line.module.css'
import { motion } from 'framer-motion'

const lineVariants = {
  hidden: {
      opacity: 0,
      width: 0,
      type: "none"
  },
  visible: {
      opacity: 1,
      width: "4.3vw",
      // paddingLeft: "2.5vw",
      transition: {
          delay: 2.2,
          duration: .2,
      }
  },
}

const Line = () => {
  return (
    <motion.div
      className={styles.line}
      initial="hidden"
      animate="visible"
      variants={lineVariants}>
    </motion.div>
  )
}

export default Line
