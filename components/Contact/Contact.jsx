import React from 'react'
import './contact.css'
import Image from 'next/image'
const Contact = () => {
  return (
    <div id='About' className='contact-container'>
      <h2 className='contact-header'>Contact</h2>
      <p style={{ marginBottom: 20, lineHeight:2 }}>
        Thank you for downloading Prayse! If you have any questions, feedback, or collaboration opportunities, We'd love to hear from you :)
      </p>
      <section className='contact-wrapper'>
        <a target='_blank' className='email' href="mailto:arzsahag@gmail.com">
          <Image src='/assets/email.png' width={50} height={50} alt='email icon' />
          <span>arzsahag@gmail.com</span>
        </a>
        <a target='_blank' className='instagram' href='https://www.instagram.com/prayse.app/'>
        <svg style={{marginLeft:10}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#cd486b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        <span className='insta-handle'>@prayse.app</span>
        </a>
      </section>
    </div>
  )
}

export default Contact