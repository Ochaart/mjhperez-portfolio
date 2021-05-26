import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { motion } from 'framer-motion'

const navigationVariants = {
  start: {
    y: 0,
    background: "none"
  },
  end: {
    y: "-2vh",
    type: "spring",
    stiffness: 150,
    background: "#FFFFFF",
  }
}
const Nav = ({ inView }) => {
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
