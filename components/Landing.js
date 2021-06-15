import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'
import Nav from './Nav';
import Scroll from './Scroll'
import ParticleBackground from './ParticleBackground';
import Welcome from './Welcome';
import Line from './Line';
import VerticalLine from './VerticalLine';
import Hello from './Hello'
import Window from './Window'
import SocialMedia from './SocialMedia'
import TechStack from './TechStack'
import More from './More'
import SanFrancisco from './SanFrancisco'
import DeskPhoto from './DeskPhoto'
import Shelf from './Shelf'

const Landing = () => {
  return (
    <InView threshold={1}>
      {({ inView, ref, entry }) => (
        <section ref={ref} className={styles.container} id="home">
          {/* <ParticleBackground /> */}
          <SanFrancisco />
          <DeskPhoto />
          <Nav inView={inView} />
          <Welcome />
          <Line />
          <Hello />
          <TechStack />
          <SocialMedia />
          <Scroll inView={inView} />
        </section>
      )}
    </InView>
  )
}

export default Landing
