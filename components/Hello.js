import React from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Hello.module.css';

const helloVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    width: "35vw",
    color: ["#ff0000","#FFD700","#d3d3d3"],
    transition: {
      duration: .3,
      delay: 1.2
    }
  }
}

const Hello = () => {
  return (
    <motion.div
      variants={helloVariants}
      initial="start"
      animate="end"
      className={styles.hello}
    >
      H E L L O
    </motion.div>
  )
}

export default Hello
