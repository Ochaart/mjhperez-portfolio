import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'

const Projects = () => {
  return (
    <InView threshold={.40}>
      {({ inView, ref }) => (
        <section ref={ref} className={styles.summary}>
          {/* <h1>Hi I'm Mikey!</h1> */}
          <p>{inView ? 'is visible' : 'not visible'}</p>
        </section>
      )}
    </InView>
  )
}

export default Projects
