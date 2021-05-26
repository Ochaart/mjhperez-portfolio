import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

let navigationVariants = {
  start: {
    y: 0,
    background: "none",
    opacity: [0,1],
    transition: {
      duration: 1,
    }
  },
  end: {
    y: "-3vh",
    type: "spring",
    stiffness: 150,
    background: "#FFFFFF",
    paddingBottom: "3vh",
    opacity: 1,
    transition: {
      duration: .5,
    }
  }
}
const Nav = ({ inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count+1)
    if (count > 1) {
      navigationVariants = {
        ...navigationVariants,
        start: {
          y: 0,
          background: "none",
          opacity: 1,
        },
      }
    }
  }, [inView])

  return (
    <motion.nav
      variants={navigationVariants}
      animate={inView ? "start" : "end" }
      className={navStyles.nav}>
      <ul className={navStyles.home}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <ul className={navStyles.resources}>
        <li>
          <Link href='/portfolio'>
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Nav
