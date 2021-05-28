import React from 'react'
import styles from '../styles/Facebook.module.css'
import { motion } from 'framer-motion'

const Facebook = ({ width, height, fill }) => {
  return (
    <div className={styles.facebook}>
      <motion.svg whileHover={{ fill: "#3b5998", transition: { duration: .5 }}} height={height} width={width} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.7 226.6">
        <path d="M76.4 226.6V123.2h34.7l5.2-40.3H76.4V57.2c0-11.7 3.2-19.6 20-19.6h21.3v-36C114 1.1 101.3 0 86.6 0 55.8 0 34.8 18.8 34.8 53.2v29.7H0v40.3h34.8v103.4h41.6z"></path>
      </motion.svg>
    </div>
  )
}

export default Facebook
