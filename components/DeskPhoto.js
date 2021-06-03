import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/DeskPhoto.module.css'

const DeskPhoto = () => {
  const photoVariants = {
    start: {
      opacity: 0,
      // y: 10
    },
    end: {
      // y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1.5
      }
    },
  }

  return (
    <motion.div
      variants={photoVariants}
      initial="start"
      animate="end"
      className={styles.deskPhoto}>
      <Image
        src="/desk.png"
        layout="fill"
      />
    </motion.div>
  )
}

export default DeskPhoto
