import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/More.module.css'

const moreVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      delay: 2.2,
      duration: .5
    }
  }
}

const More = () => {
  return (
    <motion.div
      variants={moreVariants}
      initial="start"
      animate="end"
      whileHover={{ color: "#000", transition: { duration: .3 }}}
      className={styles.more}>
      ...More
    </motion.div>
  )
}

export default More
