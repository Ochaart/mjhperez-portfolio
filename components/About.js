import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/About.module.css';
import Image from 'next/image'

const About = () => {

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
  const summaryVariants = {
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
        {({ inView, ref }) => (
          <div ref={ref} className={styles.summaryContainer}>
            <motion.div className={styles.summaryCover}
              variants={coverVariants}
              initial="start"
              animate={inView ? "endSummary" : "start"}
            >
            </motion.div>
              <motion.div className={styles.summary}
                variants={summaryVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
              </motion.div>
          </div>
        )}
      </InView>
    </section>
  )
}

export default About
