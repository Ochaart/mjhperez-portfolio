import React from 'react'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'
import Gamer from '../components/Gamer'

const footerVariants = {
  start: {
    opacity: 0,
    y: "3vh",
  },
  end: {
    opacity: 1,
    y: "0vh",
    transition: {
      duration: .5,
    }
  }
}

const pitchVariants = {
  start: {
    opacity: 0,
    x: "-2vw",
  },
  end: {
    opacity: 1,
    x: "0vw",
    transition: {
      duration: .3,
      staggerChildren: .2
    },
  }
}

const contactVariants = {
  start: {
    opacity: 0,
    x: "-2vw",
  },
  end: {
    opacity: 1,
    x: "0vw",
    transition: {
      duration: .5,
    }
  },
}

const hoverEffect = {
  scale: 1.2,
}

const hesitateVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: .02,
      delayChildren: .3,
      staggerChildren: .02
    },
  },
}

const arrowVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: .2,
      delayChildren: .5,
      staggerChildren: .1,
    }
  }
}

const Contact = () => {
  return (
    <InView threshold={.80} triggerOnce={true}>
      {({ inView, ref }) => (
        <section ref={ref} className={styles.contact} id="contact">
          <motion.div className={styles.footer}
            variants={footerVariants}
            initial="start"
            animate={inView ? "end" : "start"}
          >
            <Image
              src="/travel2.jpeg"
              layout="fill"
            />
          </motion.div>
          <motion.div className={styles.pitch}
            variants={pitchVariants}
            initial="start"
            animate={inView ? "end" : "start"}

          >
            <motion.p variants={pitchVariants}>A l l &nbsp; i t &nbsp; t a k e s</motion.p>
            <motion.p variants={pitchVariants}>i s &nbsp; o n e &nbsp; m o r e &nbsp; s t e p</motion.p>
            <motion.p variants={pitchVariants}>t o &nbsp; b e g i n &nbsp; o u r &nbsp; j o u r n e y</motion.p>
          </motion.div>
          <motion.div className={styles.hesitate}>
            <motion.p
              className={styles.hesitateText}
              variants={hesitateVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <motion.span
                variants={hesitateVariants}
              >D </motion.span>
              <motion.span
                variants={hesitateVariants}
              >O </motion.span>
              <motion.span
                variants={hesitateVariants}
              >N </motion.span>
              <motion.span
                variants={hesitateVariants}
              >' </motion.span>
              <motion.span
                variants={hesitateVariants}
              >T </motion.span>&nbsp;
              <motion.span
                variants={hesitateVariants}
              >H </motion.span>
              <motion.span
                variants={hesitateVariants}
              >E </motion.span>
              <motion.span
                variants={hesitateVariants}
              >S </motion.span>
              <motion.span
                variants={hesitateVariants}
              >I </motion.span>
              <motion.span
                variants={hesitateVariants}
              >T </motion.span>
              <motion.span
                variants={hesitateVariants}
              >A </motion.span>
              <motion.span
                variants={hesitateVariants}
              >T </motion.span>
              <motion.span
                variants={hesitateVariants}
              >E </motion.span>
            </motion.p>
            <motion.div className={styles.arrows}
              variants={arrowVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <motion.p
                variants={arrowVariants}
              >→</motion.p>
              <motion.p
                variants={arrowVariants}
              >→</motion.p>
              <motion.p
                variants={arrowVariants}
              >→</motion.p>
            </motion.div>
          </motion.div>
          <a href="tel:+14156060253">
            <motion.div className={styles.phone}
              whileHover={hoverEffect}
              variants={contactVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <p>P H O N E</p>
              <p>+ 1 &nbsp; 4 1 5 &nbsp; 6 0 6 &nbsp; 0 2 5 3</p>
            </motion.div>
          </a>
          <a href="mailto:mjhperez@gmail.com">
            <motion.div className={styles.email}
              whileHover={hoverEffect}
              variants={contactVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <p>E M A I L</p>
              <p>m j h p e r e z @ g m a i l . c o m</p>
            </motion.div>
          </a>
          <a href="/MPerez.pdf" download="MPerez">
            <motion.div className={styles.resume}
              whileHover={hoverEffect}
              variants={contactVariants}
              initial="start"
              animate={inView ? "end" : "start"}
            >
              <p>R E S U M E</p>
              <p>M P E R E Z . P D F</p>
            </motion.div>
          </a>
          <motion.div className={styles.links}
            variants={contactVariants}
            initial="start"
            animate={inView ? "end" : "start"}
          >
            <motion.a whileHover={{ color: "#3b5998" }} href="https://www.facebook.com/mjhperez/" target="_blank">
              F A C E B O O K
          </motion.a>
            <motion.a whileHover={{ color: "#6e5494" }} href="https://github.com/Ochaart" target="_blank">
              G I T H U B
          </motion.a>
            <motion.a whileHover={{ color: "#0e76a8" }} href="https://www.linkedin.com/in/mikeyjperez/" target="_blank">
              L I N K E D I N
          </motion.a>
          </motion.div>
        </section>
      )}
    </InView>
  )
}

export default Contact
