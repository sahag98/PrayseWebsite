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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi voluptatem ex commodi cupiditate officia repellendus explicabo labore facere eveniet, cum deserunt dolorum nam nemo voluptas vitae distinctio cumque ab.
      </section>
    </main>
  )
}

export default About