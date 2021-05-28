import React from 'react'
import { motion } from 'framer-motion'
import Tech from './Tech'
import styles from '../styles/TechStack.module.css'

const techStackVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: 2.2
    }
  }
}

const TechStack = () => {
  return (
    <motion.div
      variants={techStackVariants}
      initial="start"
      animate="end"
      className={styles.techStack}>
      <Tech src="/react.png" height="100vh" width="140vw" alt="JavaScript CSS HTML"/>
      <Tech src="/trio.png" height="150vh" width="150vw" alt="JavaScript CSS HTML"/>
      <Tech src="/nodejs.png" height="100vh" width="100vw" alt="JavaScript CSS HTML" paddingLeft="1vw"/>
    </motion.div>
  )
}

export default TechStack
