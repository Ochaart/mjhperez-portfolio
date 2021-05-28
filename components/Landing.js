import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'
import Details from '../components/Details';
import Nav from '../components/Nav';
import Scroll from '../components/Scroll'
import ParticleBackground from '../components/ParticleBackground';
import Welcome from '../components/Welcome';
import Line from '../components/Line';
import VerticalLine from '../components/VerticalLine';
import Hello from '../components/Hello'
import Window from '../components/Window'
import SocialMedia from '../components/SocialMedia'
import TechStack from '../components/TechStack'
import More from '../components/More'

const Landing = () => {
  return (
    <InView threshold={1}>
      {({ inView, ref, entry }) => (
        <section ref={ref} className={styles.container}>
          <ParticleBackground />
          <Nav inView={inView} />
          <Welcome inView={inView} />
          <Line inView={inView} />
          <VerticalLine inView={inView} />
          <Hello inView={inView} />
          <Window inView={inView} >
            <TechStack />
          </Window>
          <More inView={inView} />
          <SocialMedia inView={inView }/>
          <Scroll inView={inView} />
        </section>
      )}
    </InView>
  )
}

export default Landing
