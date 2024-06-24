"use client";
import "./hero.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "./loading";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
const Hero = () => {
  return (
    <main id="Home" className="hero-container">
      <div className="hero-section">
        <section className="hero-header">
          <h1 className="hero-title">Welcome to Prayse</h1>
          <p className="hero-desc">
            Create and manage your prayer list, helping you stay organized in
            your spiritual walk with God.
          </p>
          <div className="getStarted">
            <a
              className="downloadLinks"
              target="_blank"
              href="https://apps.apple.com/us/app/prayerlist-app/id6443480347"
            >
              <div className="appleDownload">
                <p
                  style={{
                    color: "black",
                    marginRight: 5,
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  Download
                </p>
                <AiOutlineApple size={30} color="black" />
              </div>
            </a>
            <a
              className="downloadLinks"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.sahag98.prayerListApp&hl=en_US&gl=US"
            >
              <div className="androidDownload">
                <p
                  style={{
                    color: "white",
                    marginRight: 5,
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  Download
                </p>
                <AiOutlineAndroid color="white" size={30} />
              </div>
            </a>
          </div>
        </section>
        <div className="hero-right">
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
                  speed={0.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Image
            className="hero-img"
            width={700}
            height={700}
            src="/assets/prayse-app.png"
            alt="app screenshot"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
