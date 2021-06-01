import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/LandingPhoto.module.css'

const LandingPhoto = ({ image }) => {
  const photoVariants = {
    start: {
      opacity: 0,
      // y: 10,
    },
    end: {
      // y: 0,
      opacity: 1,
      transition: {
        duration: .8,
        delay: 1.8
      }
    },
  }

  return (
    <motion.div
      variants={photoVariants}
      initial="start"
      animate="end"
      className={styles.landingPhoto}>
      <Image
        src="/sanfrancisco.png"
        layout="fill"
      />
    </motion.div>
  )
}

export default LandingPhoto
