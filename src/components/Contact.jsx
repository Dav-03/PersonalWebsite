import { useState } from 'react'
import './Contact.css'
import { playClick } from '../utils/Sounds'

function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'DavidMorfin25@gmail.com'

  const handleCopyEmail = async () => {
    playClick()
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Failed to copy email:', error)
    }
  }

  return (
    <div className="popupContent">
      <div className="contactSection">
        <h2 className="contactTitle">Contact</h2>

        <p className="contactText">
          The best way to reach me is through email. If you want to get in touch,
          please shoot me a email at{' '}
          <button className="emailCopyButton" onClick={handleCopyEmail}>
            {email}
          </button>.
        </p>

        <p className="contactText">
          Or click the button below to open your mail app.
        </p>

        <div className="contactActions">
          <a className="mailButton" href={`mailto:${email}`} onClick={playClick}>
            Open Mail App
          </a>

          {copied && <span className="copiedMessage">Copied to clipboard!</span>}
        </div>
      </div>
    </div>
  )
}

export default Contact