import React from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Projects.module.css'

const projectVariants = {
  start: {
    x: 0,
    y: 0,
    opacity: 0
  },
  catWalkEnd: {
    x: -500,
    y: -100,
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  stitchEnd: {
    x: 40,
    y: 200,
    opacity: 1,
    transition: {
      duration: .5,
      delay: .2,
    }
  },
  lazyChef: {
    x: 550,
    y: -200,
    opacity: 1,
    transition: {
      duration: .5,
      delay: .3,
    }
  }
}


const Projects = () => {
  return (
    <InView threshold={.60} triggerOnce={true}>
      {({ inView, ref }) => (
        <section ref={ref} className={styles.projects}>
          <motion.div className={styles.container}
            variants={projectVariants}
            initial="start"
            animate={inView? "catWalkEnd" : "start"}
          >
            <Image
              src="/catwalk.jpeg"
              layout="fill"
            />
          </motion.div>
          <motion.div className={styles.container}
            variants={projectVariants}
            initial="start"
            animate={inView? "stitchEnd" : "start"}
          >
            <Image
              src="/stitchSaver.jpeg"
              layout="fill"
            />
          </motion.div>
          <motion.div className={styles.container2}
            variants={projectVariants}
            initial="start"
            animate={inView? "lazyChef" : "start"}
          >
            <Image
              src="/lazyChef.png"
              layout="fill"
            />
          </motion.div>
        </section>
      )}
    </InView>
  )
}

export default Projects
