import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/TechStack.module.css';

const techStackVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      duration: .5,
      delay: 2.4
    }
  }
}

const TechStack = () => {
  return (
    <motion.div
      variants={techStackVariants}
      initial="start"
      animate="end"
      className={styles.techStackContainer}>
        <div className={styles.react}>
          <Image src="/react.png" layout="fill" alt="React" />
        </div>
        <div className={styles.jhc}>
          <Image src="/trio.png" layout="fill" alt="JavaScript CSS HTML" />
        </div>
      {/* <Tech src="/nodejs.png" height="50vh" width="50vw" alt="JavaScript CSS HTML" paddingLeft="1vw" paddingRight="1.2vw"/> */}
    </motion.div>
  )
}

export default TechStack
