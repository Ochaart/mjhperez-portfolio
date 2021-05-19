import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.home}>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
      <ul className={navStyles.resources}>
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
