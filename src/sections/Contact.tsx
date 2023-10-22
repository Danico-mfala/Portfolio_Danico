import Button from '@/components/Button'
import React from 'react'

function Contact() {
  return (
    <div className='contact' id='contact'>
          <h2 className="contact-title">What&apos;s Next?</h2>
          <h2 className="contact-sub-title">Get in Touch</h2>
          <p className='contact-text'>
              Although I&apos;m not currently looking for any new opportunities, my indox is always open. whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="contact-cta">
              <Button text="Say Hello" link='mailto:mfaladan@gmail.com' />
          </div>
    </div>
  )
}

export default Contact
