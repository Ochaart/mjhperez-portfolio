import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'
import Projects from '../components/Projects'

export default function Home() {
    return (
        <div className={styles.screen}>
            <Landing />
            <Projects />
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