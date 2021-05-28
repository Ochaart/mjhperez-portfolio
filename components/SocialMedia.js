import React from 'react'
import styles from '../styles/SocialMedia.module.css'
import Facebook from '../components/Facebook'
import LinkedIn from '../components/LinkedIn'
import Github from '../components/Github'
import { motion } from 'framer-motion'

const socialMediaVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      // delay: 1
    }
  }
}

const SocialMedia = () => {
  return (
    <motion.div
      variants={socialMediaVariants}
      initial="start"
      animate="end"
      className={styles.container}>
      <LinkedIn width=".7vw" height="1.5vh" fill="#d3d3d3"/>
      <Github width="1vw" height="2vh" fill="#d3d3d3"/>
      <Facebook width="1vw" height="1.5vh" fill="#d3d3d3"/>
    </motion.div>
  )
}

export default SocialMedia
