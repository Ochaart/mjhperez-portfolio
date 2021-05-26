import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Details from '../components/Details';
import Nav from '../components/Nav';
import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import useOnScreen from '../hooks/useOnScreen';
import { InView } from 'react-intersection-observer';
import Scroll from '../components/Scroll'
import ParticleBackground from '../components/ParticleBackground';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export default function Home() {
    return (
        <div className={styles.container}>
            <InView threshold={1}>
                {({ inView, ref, entry }) => (
                    <>
                    <section ref={ref} className={styles.welcome}>
                    <ParticleBackground/>
                    <Nav inView={inView} />
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}>
                        Welcome</motion.h1>
                        <p>{inView ? 'is visible' : 'not visible'}</p>
                        <Scroll inView={inView} />
                    </section>
                    </>
                )}
            </InView>
            <InView threshold={.75}>
                {({ inView, ref }) => (
                    <section ref={ref} className={`${styles.welcome} welcome`}>
                        <h1>Hi I'm Mikey!</h1>
                        <p>{inView ? 'is visible' : 'not visible'}</p>
                    </section>
                )}
            </InView>
        </div>
    )
}
 // useEffect(() => {
  //   let divs = [...document.querySelectorAll('.watch')];

  //   let options = {
  //     rootMargin: '0px',
  //     threshold: 1,
  //   }

  //   let setAnimations = (entries => {
  //     console.log(entries)
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         console.log('in view');
  //         animation.start({
  //                 x: 0,
  //                 transition: {
  //                   type: 'spring', duration: 1, bounce: 0.3
  //                 }
  //               })
  //       } else {
  //         animation.start({ x: '-100vw' })
  //       }

  //     })
  //   });

  //   let observer = new IntersectionObserver(setAnimations, options);

  //   divs.forEach((item, idx) => {
  //     observer.observe(item);
  //   })
  //   return () => {
  //     observer.disconnect(item);
  //   }
  // },[])

  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
    // animation.start({
    //   x:0,
    //   transition: {
    //     type: 'spring', duration: 1, bounce: 0.3
    //   }
    // })

  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //       transition: {
  //         type: 'spring', duration: 1, bounce: 0.3
  //       }
  //     })
  //   }
  //   if (!inView) {
  //     animation.start({ x: '-100vw' })
  //   }
  //   console.log("use effect hook, inView = ", inView);
  // }, [inView])

    // const [ containerRef, isVisible ] = observer({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0,
  // })