import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Hello.module.css';

const helloVariants = {
  start: {
    opacity: 0,
    x: "0vw",
  },
  end: {
    opacity: 1,
    x: "5.5vw",
    width: "60vw",
    color: ["#ff0000", "#FFD700", "#d3d3d3", "#FFA500"],
    transition: {
      duration: .8,
      delay: .5
    }
  },
}

const tvVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: .8,
    }
  }
}

const innerTvVariants = {
  start: {
    opacity: 0,
    // width: 0,
    // height: 0,
  },
  end: {
    opacity: 1,
    // width: "43vw",
    // height: "56vh",
    transition: {
      duration: .2,
    }
  }
}

const Hello = () => {
  return (
    <>
      <motion.div
        variants={tvVariants}
        initial="start"
        animate="end"
        className={styles.box}>
        <motion.div
          variants={innerTvVariants}
          initial="start"
          animate="end"
          className={styles.cover} />
      </motion.div>
      <motion.div
        variants={helloVariants}
        initial="start"
        animate="end"
        className={styles.hello}
      >
        H E L L O
    </motion.div>
    </>
  )
}

export default Hello
