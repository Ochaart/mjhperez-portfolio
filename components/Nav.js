import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

let navigationVariants = {
  start: {
    // y: 0,
    background: "#FFFFFF",
    boxShadow: "-0.5px 2px 7px 2px #ededed",
    opacity: [0, 1],
    transition: {
      duration: 1,
    }
  },
  end: {
    // y: "-1vh",
    background: "#FFFFFF",
    boxShadow: "-0.5px 2px 7px 2px #ededed",
    // paddingBottom: "1vh",
    opacity: 1,
    transition: {
      duration: .5,
    }
  }
}
const Nav = ({ inView }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1)
    if (count > 1) {
      navigationVariants = {
        ...navigationVariants,
        start: {
          // y: 0,
          background: "#FFFFFF",
          opacity: 1,
          boxShadow: "-0.5px 2px 7px 2px #ededed",
        },
      }
    }
  }, [inView])

  return (
    <motion.nav
      variants={navigationVariants}
      animate={inView ? "start" : "end"}
      className={navStyles.nav}>
      <ul className={navStyles.home}>
        <li>
          <Link href="#home">
            <a>Home</a>
          </Link>
          <Link href="#home">
            <div className={navStyles.man}>
              <Image
                src="/jumpingMan.png"
                width={20}
                height={20}
              />
            </div>
          </Link>
        </li>
      </ul>
      <ul className={navStyles.resources}>
        <li>
          <Link href="#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}

export default Nav
