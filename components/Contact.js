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

const contactVariants = {
  start: {
    opacity: 0
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    }
  },
}

const hoverEffect = {
  scale: 1.2,
}

const Contact = () => {
  return (
    <InView threshold={.60} triggerOnce={true}>
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
        <motion.div className={styles.pitch}>
          <p>A l l &nbsp; i t &nbsp; t a k e s</p>
          <p>i s &nbsp; o n e &nbsp; m o r e &nbsp; s t e p</p>
          <p>t o &nbsp; b e g i n &nbsp; o u r &nbsp; j o u r n e y</p>
        </motion.div>
        <a href="tel:+14156060253">
          <motion.div className={styles.phone}
            whileHover={hoverEffect}
          >
            <p>P H O N E</p>
            <p>+ 1 &nbsp; 4 1 5 &nbsp; 6 0 6 &nbsp; 0 2 5 3</p>
          </motion.div>
        </a>
        <a href="mailto:mjhperez@gmail.com">
          <motion.div className={styles.email}
            whileHover={hoverEffect}
          >
            <p>E M A I L</p>
            <p>m j h p e r e z @ g m a i l . c o m</p>
          </motion.div>
        </a>
        <a href="/M.Perez.pdf" download="M.P">
          <motion.div className={styles.resume}
            whileHover={hoverEffect}
          >
            <p>R E S U M E</p>
            <p>M . P E R E Z . P D F</p>
          </motion.div>
        </a>
        {/* <motion.div className={styles.line} /> */}
        <motion.div className={styles.links}>
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
