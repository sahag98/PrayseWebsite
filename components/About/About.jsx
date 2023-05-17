import './about.css'
import Image from "next/image";
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
    <main className='about-container'>
      <section className='about-left'>
        {about.map((a) => (
          <div key={a.id} className='about-item'>
            <Image className='items-image' width={200} height={200} src={a.image} alt="item images" />
            <h2>{a.title}</h2>
            <p>{a.desc}</p>
          </div>
        ))}
      </section>
      <section className='about-right'>
        Our app offers a user-friendly interface and a range of customizable options,
        allowing you to tailor your prayer list to your specific needs and preferences. You can add prayer requests for yourself or others, set reminders, and even track answered prayers.
      </section>
    </main>
  )
}

export default About