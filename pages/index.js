import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import Details from '../components/Details';
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
// import { Fragment } from 'react'


export default function Home() {

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw'})
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView])

  return (
    <div className={homeStyles.container}>
      <div ref={ref}>
        <motion.section className={`${homeStyles.welcome} welcome`}
        animate={animation}
        >
          <h1>Hi I'm Mikey!</h1>
          <p>I'm a software engineer</p>
        </motion.section>
      </div>
      <section className={`${homeStyles.name} welcome`}>
        <h1>WELCOME</h1>
      </section>
    </div>
  )
}
