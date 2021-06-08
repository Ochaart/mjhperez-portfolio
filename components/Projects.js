import React, { useState } from 'react'
import Image from 'next/image'
import ParticleBackground from './ParticleBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Projects.module.css'

const projectVariants = {
  start: {
    x: 0,
    y: 0,
    opacity: 0
  },
  catWalkEnd: {
    x: "-26vw",
    y: "-8vh",
    opacity: 1,
    transition: {
      duration: .5
    }
  },
  stitchEnd: {
    x: "3vw",
    y: "25vh",
    opacity: 1,
    transition: {
      duration: .5,
      delay: .2,
    }
  },
  lazyChef: {
    x: "28vw",
    y: "-21vh",
    opacity: 1,
    transition: {
      duration: .5,
      delay: .3,
    }
  },
  titleStart: {
    x: -10,
    opacity: 0,
  },
  titleEnd: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .4
    }
  },
  hover: {
    scale: 1.05,
    opacity: .2,
    transition: {
      stiffness: 120,
    }
  },
  addBorder: {
    border: "10px solid #800000",
    backgroundColor: "rgba(0,0,0,0.8)",

  },
  opacity: {
    transition: {
      stiffness: 150,
    }
  }
}


const Projects = () => {
  const [catWalkHover, setCatWalkHover] = useState(false);
  const [stitchHover, setStitchHover] = useState(false);
  const [lazyChefHover, setLazyChefHover] = useState(false);
  return (
    <InView threshold={.60} triggerOnce={true}>
      {({ inView, ref }) => (
        <section ref={ref} className={styles.projects}>
          <ParticleBackground />
          <motion.div className={styles.title}
            variants={projectVariants}
            initial="titleStart"
            animate={inView ? "titleEnd" : "titleStart"}
          >
            P R O J E C T S
          </motion.div>
          <motion.div className={styles.container}
            variants={projectVariants}
            initial="start"
            animate={inView ? "catWalkEnd" : "start"}
            whileHover="addBorder"
            onHoverStart={() => setCatWalkHover(true)}
            onHoverEnd={() => setCatWalkHover(false)}
          >
            <motion.div className={styles.coverPage}
              animate="opacity"
              variants={projectVariants}
              whileHover="hover"
            >
              <Image
                src="/catwalk.jpeg"
                layout="fill"
              />
            </motion.div>
              {catWalkHover && (
                <motion.div className={styles.catWalkTitle}>
                  <p>C A T W A L K</p>
                  <p>E-COMMERCE PRODUCT DETAIL PAGE</p>
                </motion.div>

              )}

          </motion.div>
          <motion.div className={styles.container1}
            variants={projectVariants}
            initial="start"
            whileHover="hover"
            animate={inView ? "stitchEnd" : "start"}
          >
            <Image
              src="/stitchSaver.jpeg"
              layout="fill"
            />
          </motion.div>
          <motion.div className={styles.container2}
            variants={projectVariants}
            initial="start"
            whileHover="hover"
            animate={inView ? "lazyChef" : "start"}
          >
            <Image
              src="/lazyChef.jpeg"
              layout="fill"
            />
          </motion.div>
        </section>
      )}
    </InView>
  )
}

export default Projects
