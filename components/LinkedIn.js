import React from 'react'
import styles from '../styles/LinkedIn.module.css'
import { motion } from 'framer-motion'

const LinkedIn = ({ width, height, fill }) => {
  return (
    <div className={styles.linkedIn}>
      <a href="https://www.linkedin.com/in/mikeyjperez/" target="_blank">
      <motion.svg whileHover={{ fill: "#0e76a8", transition: { duration: .3 }}}fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.8 25.7">
        <path d="M.4 8.5h5.3v17.2H.4V8.5zM3.1 0c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1C1.4 6.2 0 4.8 0 3.1 0 1.4 1.4 0 3.1 0M9.1 8.5h5.1v2.3h.1C15 9.4 16.8 8 19.4 8c5.4 0 6.4 3.6 6.4 8.2v9.4h-5.3v-8.4c0-2 0-4.6-2.8-4.6s-3.2 2.2-3.2 4.4v8.5H9.1v-17z">
        </path>
      </motion.svg>
      </a>
    </div>
  )
}

export default LinkedIn
