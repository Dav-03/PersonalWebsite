import AboutMe from './components/AboutMe'
import PopupWindow from './components/PopUpWindow'
import Contact from './components/Contact'
import Projects from './components/Projects'

import contactIcon from './assets/contactIcon.png'
import projectsIcon from './assets/projectsIcon.png'
import aboutMeicon from './assets/aboutMeicon.png'
import resumeIcon from './assets/resumeIcon.png'
import fishing from './assets/fishing.png'
import xIcon from './assets/x2.png'
import linkedInLogo from './assets/LinkedInLogo.png'
import gitHubLogo from './assets/GitHubLogo.png'

import { useState, useEffect } from 'react'
import Wave from 'react-wavify'

import './App.css'

function App(){
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return

      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const startDragging = (e) => {
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const [activeWindow, setActiveWindow] = useState(null)
  const [isClosing, setIsClosing] = useState(false)

  const openWindow = (windowName) => {
    setActiveWindow(windowName)
    setIsClosing(false)
    setPosition({ x: 0, y: 0 })
  }

  const playOpenSound = () => {
    const sound = new Audio(`${import.meta.env.BASE_URL}toggle_on.mp3`)
    sound.play()
  }

  const playClick = () => {
    const sound = new Audio(`${import.meta.env.BASE_URL}click.mp3`)
    sound.play()
  }

  const closeWindow = () => {
    const sound = new Audio(`${import.meta.env.BASE_URL}toggle_off.mp3`)
    sound.play()

    setIsClosing(true)
    setTimeout(() => {
      setActiveWindow(null)
      setIsClosing(false)
    }, 250)
  }

  return (
    <div className="page">
      <div className="content">
        <h1>Hello, I'm <span className='name'>David</span></h1>
      </div>

      <div className="iconRow">
        <button className="menuButton" onClick={() => { playOpenSound(); openWindow('contact') }}>
          <img src={contactIcon} alt="Contact" className="menuIcon contactIcon" />
          <span className="menuLabel">Contact</span>
        </button>

        <button className="menuButton" onClick={() => { playOpenSound(); openWindow('projects') }}>
          <img src={projectsIcon} alt="Projects" className='menuIcon' />
          <span className="menuLabel">Projects</span>
        </button>

        <button className="menuButton" onClick={() => { playOpenSound(); openWindow('about') }}>
          <img src={aboutMeicon} alt="About Me" className='menuIcon' />
          <span className="menuLabel">About Me</span>
        </button>

        <button className="menuButton" onClick={() => { playOpenSound(); window.open(`${import.meta.env.BASE_URL}Resume.pdf`, '_blank') }}>
          <img src={resumeIcon} alt="Resume" className='menuIcon' />
          <span className="menuLabel">Resume</span>
        </button>
      </div>


      {activeWindow && (
        <div className="popupOverlay" onClick={closeWindow}>
          <div onClick={(e) => e.stopPropagation()}>
            <PopupWindow
              title={activeWindow}
              onClose={closeWindow}
              position={position}
              isClosing={isClosing}
              startDragging={startDragging}
              xIcon={xIcon}
              size={
                activeWindow === 'contact' ? 'small' :
                activeWindow === 'projects' ? 'large' :
                'large'
              }
            >
              {activeWindow === 'about' && <AboutMe />}
              {activeWindow === 'contact' && <Contact />}
              {activeWindow === 'projects' && <Projects />}
            </PopupWindow>
          </div>
        </div>
      )}


      <div className="waveContainer">
        <Wave
          fill="#5bc2f3"
          options={{
            height: 50,
            amplitude: 30,
            speed: 0.2,
            points: 4
          }}
        />
        <img src={fishing} alt="Fishing" className="fishIcon" />
      </div>

      <div className="footer">
        <div className="footerLinks">
          <a href="https://www.linkedin.com/in/david-morfin/" target="_blank" rel="noopener noreferrer" onClick={playClick}>
            <img src={linkedInLogo} alt="LinkedIn" className="footerLogo" />
          </a>
          <a href="https://github.com/Dav-03" target="_blank" rel="noopener noreferrer" onClick={playClick}>
            <img src={gitHubLogo} alt="GitHub" className="footerLogo" />
          </a>
        </div>
        <p className="footerText">Made by David Morfin © 2026</p>
      </div>

    </div>
  )
}

export default App