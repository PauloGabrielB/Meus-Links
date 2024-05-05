import { useState } from 'react'
import './App.css'
import myimg from './img/myimg.jpeg'
import { CgWebsite } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function App() {
 

  return (
      <section className="links-page">
        <div className="links-container">
            <div className="links-img">
              <img src={myimg} alt="" />
            </div>
            <h1>Links</h1>
            <div className="links-button">
              <div className="button"><FaWhatsapp className='ico' /><a href=" https://wa.me/55085991856914"><h1>WhatsApp</h1></a></div>
              <div className="button"><CgWebsite className='ico' /><a href="https://pagcode.me/#"><h1>WebSite</h1></a></div>
              <div className="button"><FaInstagram className='ico' /><a href="https://www.instagram.com/pagcode"><h1>Instagram</h1></a></div>
              <div className="button"><FaGithub className='ico' /><a href="https://github.com/PauloGabrielB"><h1>GitHub</h1></a></div>
            </div>
        </div>
      </section>
  )
}

export default App
