"use client"
import './about.css'
import Image from "next/image";
import { motion } from 'framer-motion'
import { AiOutlineInstagram } from 'react-icons/ai';
const About = () => {

  const about = [
    {
      id: 1,
      title: 'Folders',
      image: '/assets/folder.png',
      desc: 'Easily create folders to organize different prayers'
    },
    {
      id: 2,
      title: 'Devotional',
      image: '/assets/devotional.png',
      desc: 'Meditate daily on a devotional provided by @triedbyfire'
    },
    {
      id: 3,
      title: 'Community',
      image: '/assets/earth.png',
      desc: 'Share prayers and pray for one another through the Community page'
    },
    {
      id: 4,
      title: 'Gospel of Jesus',
      image: '/assets/book.png',
      desc: 'Learn about Jesus and take the next step'
    }
  ]
  return (
    <main id="About" className='about-container'>
      <section className='about-left'>
        {about.map((a) => (
          <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} transition={0.8} key={a.id} className='about-item'>
            <Image className='items-image' width={200} height={200} src={a.image} alt={a.title + 'image'} />
            <h2>{a.title}</h2>
            <p>{a.desc}</p>
          </motion.div>
        ))}
      </section>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className='about-right'>
        <h2 className='about-title'>Our app offers a user-friendly interface and a range of practical
          features.</h2>
        <p>
          You can add prayer requests for yourself or others, track answered prayers,
          favorite daily verses and much more.
        </p>
        {/* <section className='socials'>
          <h3>Follow us to stay up to date with future updates & changes</h3>
          <AiOutlineInstagram size={30} />
        </section> */}
      </motion.div>
    </main>
  )
}

export default About