"use client"
import './about.css'
import Image from "next/image";
import { motion} from 'framer-motion'

const About = () => {

  const about = [
    {
      id: 1,
      title: 'Folders',
      image: '/assets/folder.png',
      desc: 'Create folders to organize different prayers.'
    },
    {
      id: 2,
      title: 'Devotional',
      image: '/assets/devotional.png',
      desc: 'Meditate daily on a devotional provided by @triedbyfire.'
    },
    {
      id: 3,
      title: 'Community',
      image: '/assets/earth.png',
      desc: 'Share prayers and pray for one another through the Community page.'
    },
    {
      id: 4,
      title: 'Gospel of Jesus',
      image: '/assets/book.png',
      desc: 'Learn about Jesus and take the next step.'
    }
  ]

  const items = [
    {
      id: 1,
      feature: '- Add prayer requests for yourself and others',
    },
    {
      id: 2,
      feature: '- Track answered prayers',
    },
    {
      id: 3,
      feature: '- Favorite daily verses',
    },
    {
      id: 4,
      feature: '- Meditate on the daily devotional',
    },
    {
      id: 5,
      feature: '- And more!',
    },
  ]
  return (
    <main id="About" className='about-container'>
      <section className='about-left'>
        {about.map((a) => (
          <motion.div 
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={2} 
            key={a.id} 
            className='about-item'>
            <Image className='items-image' width={200} height={200} src={a.image} alt={a.title + 'image'} />
            <h2>{a.title}</h2>
            <p style={{lineHeight:1.5}}>{a.desc}</p>
          </motion.div>
        ))}
      </section>
      <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} className='about-right'>
        <h2 className='about-title'>Our app offers a user-friendly interface and a range of practical
          features.</h2>
        <p className='about-long'>
          Whether you're looking to deepen your own prayer
          life or connect with others in your community,
          our app is a valuable tool for anyone seeking
          to grow in their faith. Start your journey
          towards a more intentional and meaningful
          prayer life today with our prayer list app.
        </p>
        <ul>
          <li>- Add prayer requests for yourself and others</li>
          <li>- Track answered prayers</li>
          <li>- Favorite daily verses</li>
          <li>- Meditate on the daily devotional</li>
          <li>- And more!</li>
        </ul>
      </motion.div>
    </main>
  )
}

export default About