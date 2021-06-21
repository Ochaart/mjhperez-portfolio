import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/SanFrancisco.module.css'

const SanFrancisco = ({ image }) => {
  const photoVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: .8,
        delay: 1.2
      }
    },
  }

  return (
    <motion.div
      variants={photoVariants}
      initial="start"
      animate="end"
      className={styles.sanFrancisco}>
      <Image
        src="/sanfrancisco.png"
        layout="fill"
      />
    </motion.div>
  )
}

export default SanFrancisco
