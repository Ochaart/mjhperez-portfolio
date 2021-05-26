import React from 'react'
import Particles from 'react-particles-js';
import ParticleConfig from '../config/particlesConfig';
import styles from '../styles/ParticleBackground.module.css';

const ParticleBackground = ({ children }) => {
  return (
    <div className={styles.container}>
      <Particles width="98vw" height="100vh" params={ParticleConfig}>
        {children}
      </Particles>
    </div>
  )
}

export default ParticleBackground
