"use client"
import './hero.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import React, { Suspense } from 'react'
import Loading from './loading';
import { AiOutlineAndroid, AiOutlineApple } from 'react-icons/ai';
const Hero = () => {

  return (
    <main className='hero-container'>
      <div className='hero-section'>
        <section className='hero-header'>
          <h1 className='hero-title'>Welcome to our prayer list app!</h1>
          <p className='hero-desc'>
            With our app, you can easily create and manage your personal prayer list,
            helping you stay organized and focused in your spiritual walk with God.
          </p>
          <div className='getStarted'>
            <div className='appleDownload'>
              <p style={{ color: 'black', marginRight: 5, fontWeight: 500, fontSize: '1rem' }}>Get Started</p>
              <AiOutlineApple size={30} color='black' />
            </div>
            <div className='androidDownload'>
              <p style={{ color: 'white', marginRight: 5, fontWeight: 500, fontSize: '1rem' }}>Get Started</p>
              <AiOutlineAndroid size={30} />
            </div>
          </div>
        </section>
        <div className='hero-right'>
          <Canvas>
            <Suspense fallback={Loading}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 300, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#FFD68A"
                  attach="material"
                  distort={0.5}
                  speed={1}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image className='hero-img' width={700} height={700} src='/assets/phone.png' alt="app screenshot" />
        </div>
      </div >
    </main >
  )
}

export default Hero