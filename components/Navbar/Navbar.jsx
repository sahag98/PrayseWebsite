"use client"
import Image from 'next/image';
import './navbar.css'
import { AiOutlineDownload } from 'react-icons/ai';
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import styles from './navbar.module.css'
import {AiOutlineHeart} from "react-icons/ai"
import Link from 'next/link';

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
        staggerChildren: 0.3,
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
        <Image className='navbar-icon' width={50} height={50} src='/assets/prayerhands.png' alt="website logo" />
        <h1 className='navbar-header'>Prayse</h1>
      </section>
      <ul className='nav-list'>
      <Link  className='normal-links' href="/privacy">
          <li style={{fontSize:14}} >Privacy Policy
          </li>
      </Link>
        {['Home', 'About', 'Reviews', 'Contact', 'Support'].map((item) => (
          <>
          
          {item == 'Support' ? <a className='support' href="https://www.buymeacoffee.com/prayse" target='_blank'>
            <li>Support</li><span><AiOutlineHeart style={{marginTop:2}} size={25}  />
            </span></a> :  
          <li key={`link-${item}`}>
            <a className='normal-links' href={`#${item}`}>{item}</a>
          </li>
          }
          </>
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
          <Link  className='normal-links' href="/privacy">
          <li style={{fontSize:14}} >Privacy Policy
          </li>
      </Link>
            {['Home', 'About', 'Reviews','Privacy Policy', 'Contact','Support'].map((item) => (
              <>
               {item == 'Support' ? <motion.li variants={linkVariants} className='mobile-li' onClick={() => setToggle(false)}><a className='support' href="https://www.buymeacoffee.com/prayse" target='_blank'><li>Support</li><span><AiOutlineHeart style={{marginTop:2}} size={25}  /></span></a> </motion.li>:
              <motion.li variants={linkVariants} onClick={() => setToggle(false)} className='mobile-li' key={`link-${item}`}>
                <a className='mobile-a' href={`#${item}`}>{item}</a>
              </motion.li>
}
              </>
            ))}
          </ul>
        </motion.div>

      </div>
    </nav>
  )
}

export default Navbar