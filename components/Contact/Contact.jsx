import React from 'react'
import './contact.css'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className='contact-container'>
      <h2 className='contact-header'>Contact</h2>
      <p style={{ marginBottom: 20 }}>
        Thank you for your interest! If you have any questions, feedback, or collaboration opportunities, I'd love to hear from you :)
      </p>
      <section className='contact-wrapper'>
        <div className='email'>
          <Image src='/assets/email.png' width={80} height={80} alt='email icon' />
          <span>arzsahag@gmail.com</span>
        </div>
        <div className='instagram'>
          <Image style={{ marginLeft: 10 }} src='/assets/insta-icon.png' width={50} height={50} alt='instagram icon' />
          <span className='insta-handle'>@sahag98</span>
        </div>
      </section>
    </div>
  )
}

export default Contact