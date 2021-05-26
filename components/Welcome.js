import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Welcome.module.css'

const welcomeVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
      opacity: 1, y: 0, transition: {
          delay: 1.8,
          duration: 1,
      }
  },
}

const Welcome = () => {
  return (
    <motion.div
      className={styles.welcome}
      initial="hidden"
      animate="visible"
      variants={welcomeVariants}>
      I'm Mikey! A software engineer from San Francisco. <br />
      Welcome to my portfolio !
    </motion.div>
  )
}

export default Welcome
