import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from '../styles/Gamer.module.css'

const svgVariants = {
  start: {
    opacity: 0,
    rotate: 0,
    scale: 0,
  },
  end: {
    opacity: 1,
    rotate: 345,
    scale: 1,
    transition: {
      duration: .8,
    }
  }
}

const Gamer = () => {
  return (
    <motion.div className={styles.gamerContainer}
      variants={svgVariants}
      initial="start"
      animate="end"
    >
      <Image
        src="/gamer.jpeg"
        layout="fill"
      />
    </motion.div>
  )
}

export default Gamer
