import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Tech = ({ src, variants = {}, height, width, alt, paddingLeft = 0, paddingRight = 0 }) => {
  return (
    <motion.div
      variants={variants}
      initial="start"
      animate="end"
      style={{ paddingLeft, paddingRight }}
    >
      <Image
        src={src}
        width={width}
        height={height}
      />
    </motion.div>
  )
}

export default Tech
