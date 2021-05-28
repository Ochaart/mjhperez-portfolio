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
    x: 80,
    width: "35vw",
    color: ["#ff0000","#FFD700","#d3d3d3"],
    boxShadow: "0 2px 7px 1px rgba(31,31,31,. 0.2)",
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
