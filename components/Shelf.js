import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Shelf.module.css';

const Shelf = () => {
  return (
    <motion.div className={styles.shelfContainer}>
      <Image
        src="/shelf.png"
        alt="Shelf"
        layout="fill"
      />
    </motion.div>
  )
}

export default Shelf
