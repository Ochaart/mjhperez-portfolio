import React, { useState, useEffect } from 'react'
import styles from '../styles/Scroll.module.css'
import { motion } from 'framer-motion'

const dotVariants = {
  start: {
    y: "-1vh",
    opacity: [0, 0],
  },
  end: {
    y: "0vh",
    opacity: [1, 1, 1, 0, 0, 0],
  },
}
const mouseVariants = {
  start: { y: "0vh" },
  end: { y: ".5vh" },
}

let containerVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      delay: 1.5,
    }
  }
}

const Scroll = ({ inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count+1)
    if (count > 0) {
      containerVariants = {
        ...containerVariants,
        end: {
          opacity: 1,
          transition: {
            delay: 0
          }
        }
      }
    }
  }, [inView])

  return (
    <motion.div
      initial="start"
      animate={inView ? "end" : "start"}
      variants={containerVariants}
      className={styles.scrollWrapper}>
      <motion.div
        variants={mouseVariants}
        initial="start"
        animate="end"
        transition={{ repeat: 'Infinity', repeatType: "mirror", duration: 1 }}
        className={styles.mouse}>
        <motion.p
          variants={dotVariants}
          transition={{ repeat: 'Infinity', repeatType: "mirror", duration: 1,  }}
        >.</motion.p>
      </motion.div>
      <p>Scroll</p>
    </motion.div>
  )
}

export default Scroll
