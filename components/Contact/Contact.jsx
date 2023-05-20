import React from 'react'
import './contact.css'
import Image from 'next/image'
const Contact = () => {
  return (
    <div id='About' className='contact-container'>
      <h2 className='contact-header'>Contact</h2>
      <p style={{ marginBottom: 20 }}>
        Thank you for your interest! If you have any questions, feedback, or collaboration opportunities, I'd love to hear from you :)
      </p>
      <section className='contact-wrapper'>
        <a target='_blank' className='email' href="mailto:arzsahag@gmail.com">
          <Image src='/assets/email.png' width={60} height={60} alt='email icon' />
          <span>arzsahag@gmail.com</span>
        </a>
        <a target='_blank' className='instagram' href='https://www.instagram.com/sahag98/'>
          <Image style={{ marginLeft: 10 }} src='/assets/insta-icon.png' width={35} height={35} alt='instagram icon' />
          <span className='insta-handle'>@sahag98</span>
        </a>
      </section>
    </div>
  )
}

export default Contact