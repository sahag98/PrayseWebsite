"use client"
import Image from 'next/image';
import './navbar.css'
import { AiOutlineDownload } from 'react-icons/ai';
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styles from './navbar.module.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('in nav useefffect')
    handleBodyScroll()
  }, [toggle])

  const handleBodyScroll = () => {
    console.log(toggle)
    if (toggle) {
      // console.log(styles.disableScroll)
      document.body.classList.add('disableScroll');
    } else {
      document.body.classList.remove('disableScroll');
    }
  };
  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: '-100vh',
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <nav className='navbar'>
      <section className='navbar-logo'>
        <Image className='navbar-icon' width={50} height={50} src='/assets/prayerhands.png' alt="prayer hands" />
        <h1 className='navbar-header'>Prayse</h1>
      </section>
      <ul className='nav-list'>
        {['Home', 'About', 'Fuctionalities', 'Contact'].map((item) => (
          <li key={`link-${item}`}>
            <a className='normal-links' href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="navbar-menu">
        {!toggle &&
          <HiMenuAlt4 className='open-logo' onClick={() => setToggle(!toggle)} />
        }
        <motion.div
          initial={false}
          className='motion-div'
          variants={menuVariants}
          animate={toggle ? "opened" : "closed"}
        >
          <HiX className='X-logo' onClick={() => setToggle(false)} />
          <ul className='mobile-ul' >
            {['Home', 'About', 'Fuctionalities', 'Contact'].map((item) => (
              <motion.li variants={linkVariants} onClick={() => setToggle(false)} className='mobile-li' key={`link-${item}`}>
                <a className='mobile-a' href={`#${item}`}>{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </nav>
  )
}

export default Navbar