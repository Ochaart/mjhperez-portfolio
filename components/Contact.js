import React from 'react'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import styles from '../styles/Contact.module.css'
import Gamer from '../components/Gamer'

const Contact = () => {
  return (
    <InView threshold={.60} triggerOnce={true}>
      <section className={styles.contact} id="contact">
        <motion.div className={styles.footer}>
        <Image
          src="/travel2.jpeg"
          layout="fill"
        />
        </motion.div>
        <motion.div className={styles.pitch}>
          <p>A l l &nbsp; i t &nbsp; t a k e s</p>
          <p>i s &nbsp; o n e &nbsp; m o r e &nbsp; s t e p</p>
          <p>t o &nbsp; b e g i n &nbsp; t h i s &nbsp; j o u r n e y</p>
        </motion.div>
        <motion.div className={styles.phone}>
          <p>P H O N E</p>
          <p>+ 1 &nbsp; 4 1 5 &nbsp; 6 0 6 &nbsp; 0 2 5 3</p>
        </motion.div>
        <motion.div className={styles.email}>
          <p>E M A I L</p>
          <p>m j h p e r e z @ g m a i l . c o m</p>
        </motion.div>
        <a href="/M.Perez.pdf" download="Michael Perez Resume">
        <motion.div className={styles.resume}>
          <p>R E S U M E</p>
          <p>M . P E R E Z . P D F</p>
        </motion.div>
        </a>
        {/* <motion.div className={styles.line} /> */}
        <motion.div className={styles.links}>
          <a href="https://www.facebook.com/mjhperez/" target="_blank">
            F A C E B O O K
          </a>
          <a href="https://github.com/Ochaart" target="_blank">
            G I T H U B
          </a>
          <a href="https://www.linkedin.com/in/mikeyjperez/" target="_blank">
            L I N K E D I N
          </a>
        </motion.div>
      </section>
    </InView>
  )
}

export default Contact
