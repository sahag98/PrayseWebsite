import React from "react";
import "./download.css";
import Image from "next/image";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Download = () => {
  return (
    <div className="dwnld-container">
      <div className="dwnld-wrapper">
        <div className="dwnld-left">
          <h2 className="dwnld-title">Download Prayse</h2>
          <p>
            Prayse stands as a dedicated prayer list application, crafted to
            facilitate the efficient management and organization of your
            prayers, thereby enhancing your focus and structure in your
            spiritual journey alongside God. Developed by Sahak Arzoumanian,
            Prayse has been available to users since its launch in September
            2022. We express gratitude to God for the profound impact our
            application has had in aiding individuals in their daily prayer
            life.
          </p>
          <a style={{ textDecoration: "none", color: "#2f2d51" }} href="#Home">
            <div className="appleDownload1">
              <p
                style={{
                  color: "#2f2d51",
                  marginRight: 5,
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                Get Started
              </p>
              <FaArrowRight size={25} />
            </div>
          </a>
        </div>
        <Image
          className="dwnld-image"
          src="/assets/app.png"
          width={4976}
          height={2696}
        />
      </div>
    </div>
  );
};

export default Download;
