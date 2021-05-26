import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'
import Details from '../components/Details';
import observer from '../hooks/observer'
import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
// import { useInView } from 'react-intersection-observer';
// import observer2 from '../hooks/observer2';
// import { Fragment } from 'react'
import useOnScreen from '../hooks/useOnScreen';
import { InView } from 'react-intersection-observer';
import Scroll from '../components/Scroll'


export default function Home() {
    // const animation = useAnimation();
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <div className={homeStyles.container}>
            <InView threshold={1}>
                {({ inView, ref }) => (
                    <section ref={ref} className={`${homeStyles.welcome} welcome`}>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={variants}>Welcome
                        </motion.h1>
                        <p>{inView ? 'is visible' : 'not visible'}</p>
                        <Scroll inView={inView}/>
                    </section>
                )}
            </InView>
            <InView threshold={.75}>
                {({ inView, ref }) => (
                    <section ref={ref} className={`${homeStyles.welcome} welcome`}>
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