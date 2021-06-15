import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/About.module.css';
import Image from 'next/image'
import Line from './Line';
import ParticleBackground from './ParticleBackground';

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
      duration: .2,
      delay: .4,
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
      duration: .3,
    }
  },
  endSummary: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: .2,
      delay: .2
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
      duration: .2,
      delay: .7,
    }
  }
}

const summaryVariants = {
  start: {
    opacity: 0,
    y: 5
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
      duration: .4,
    }
  }
}
const About = () => {
  return (
    <section className={styles.about} id="about">
      {/* <ParticleBackground /> */}
      <InView threshold={.5} triggerOnce={true}>
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
      <InView threshold={.35} triggerOnce={true}>
        {({ inView, ref }) => {
          return (
            <div ref={ref} className={styles.summaryContainer}>
              <motion.div className={styles.title}
                variants={summaryVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
                A B O U T &nbsp; M I K E Y
             </motion.div>
              <motion.div className={styles.body}
                variants={summaryVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
                <p>
                  My background is in the Hospitality Industry. I've always enjoyed traveling the world and meeting people. I thrive in the social and team environments.
               </p>
                <br />
                <p>
                  What made me get into programming? Honestly, having the power in your hands to develop and turn ideas into realites and the ability to reach so much people at your finger tips, it was simply imposible to resist!
               </p>
                <br />
                <p>
                  With that being said, I'd love to help bring your dreams into reality!
               </p>
              </motion.div>
              <motion.div className={styles.technologies}
                variants={summaryVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
                T E C H N O L O G I E S
             </motion.div>
              <motion.div className={styles.techBody}
                variants={summaryVariants}
                initial="start"
                animate={inView ? "end" : "start"}
              >
                <p>
                  Front End
                </p>
                <p>
                  JavaScript (ES6+) | React | jQuery | Redux |  HTML5 | CSS3 | Next.js | framer-motion | Sass | Styled Components
                </p>
                <p>
                  Back End
                </p>
                <p>
                  MySQL | MongoDB | Mongoose | Node.js | Express | Axios | PostgreSQL | REST API | Nginx
                </p>
                <p>
                  DevOps &amp; Testing
                </p>
                <p>
                  AWS EC2 | S3 | Docker | Git | Babel | Webpack | Jest | Enzyme | Mocha | Chai | Loader.io | K6 | New Relic
                </p>
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
