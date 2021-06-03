import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/About.module.css';
import Image from 'next/image'

const profilePicVariants = {
  start: {
    opacity: 1,
    width: 0,
    height: "100%"

  },
  end: {
    opacity: 1,
    width: "100%",
    height: "100%",
    boxShadow: "1.5rem 2.5rem 5rem 0.7rem rgb(0 0 0 / .15)",
    transition: {
      duration: .3,
      delay: .5,
    }
  },
}

const coverVariants = {
  start: {
    opacity: 0,
    width: 0,
  },
  endProfile: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: .4,
    }
  },
  endSummary: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: .3,
      delay: .3
    }
  }
}
const summaryContainerVariants = {
  start: {
    opacity: 1,
    width: 0,
  },
  end: {
    opacity: 1,
    width: "100%",
    boxShadow: "1.5rem 2.5rem 5rem 0.7rem rgb(0 0 0 / .15)",
    transition: {
      duration: .3,
      delay: .8,
    }
  }
}

const titleVariants = {
  start: {
    opacity: 0,
    y: 5
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: .5,
    }
  }
}
const About = () => {

  return (
    <section className={styles.about}>
      <InView threshold={.5}>
        {({ inView, ref }) => (
          <div ref={ref} className={styles.profileContainer}>
            <motion.div className={styles.profileCover}
              variants={coverVariants}
              initial="start"
              animate={inView ? "endProfile" : "start"}
            />
            <motion.div className={styles.imageContainer}
              variants={profilePicVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <Image
                src="/profile.jpeg"
                alt="Picture of author"
                width={450}
                height={590}
                layout="fixed"
              />
            </motion.div>
          </div>
        )}
      </InView>
      <InView threshold={.3}>
        {({ inView, ref }) => {


          return (
            <div ref={ref} className={styles.summaryContainer}>
              <motion.div className={styles.title}
                variants={titleVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
                A B O U T &nbsp; M I K E Y
             </motion.div>
              <motion.div className={styles.summaryCover}
                variants={coverVariants}
                initial="start"
                animate={inView ? "endSummary" : "start"}
              >
              </motion.div>
              <motion.div className={styles.summary}
                variants={summaryContainerVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >

              </motion.div>

            </div>
          )
        }}
      </InView>
    </section>
  )
}

export default About
