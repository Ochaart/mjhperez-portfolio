import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Hello.module.css';

const helloVariants = {
  start: {
    opacity: 0,
    x: 0,
  },
  end: {
    opacity: 1,
    x: 85,
    width: "35vw",
    color: ["#ff0000", "#FFD700", "#d3d3d3", "#FFA500"],
    transition: {
      duration: .8,
      delay: 1
    }
  }
}

const Hello = () => {
  return (
    <>
      <div className={styles.box}>

        <div className={styles.cover}>
        </div>
      </div>

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
