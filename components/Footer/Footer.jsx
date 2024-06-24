"use client";
import React, { useState } from "react";
import "./footer.css";
const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="footer-container">
      <span>@2023 Prayse by Sahak Arzoumanian</span>
    </div>
  );
};

export default Footer;
