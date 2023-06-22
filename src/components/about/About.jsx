import React from 'react'
import './about.css'
import ME from '../../assets/about-me-senghong.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AVTR1 from '../../assets/me.png'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about_me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5> Experience</h5>
              <small> 3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5> Clients </h5>
              <small> 3+ Clients </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5> Projects</h5>
              <small> 10+ Completed </small>
            </article>
          </div>
          <p>
          Hello! I'm <span> Senghong </span> , but you may call me <span> Grizzly  </span> if you want to.
          I am a Software Engineering student in Kirirom Institute of Technology - KIT.  I’m a frontend developer also penatration testing in my university. I’m a person who like to work in a fun and challenging working environment that will encourage me to improve and learn the new and necessary skills. 
          I believe that putting in a lot of effort and having a strong sense of commitment, discipline, and responsibility will result in high-quality work.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
      <h5>  </h5>
      <h2>  </h2>
      <div></div>
      <div className="container quote__containter">
        <article className='quote'>
          <div className='testimonial'>
            <img src={AVTR1} alt="Quote" />
          </div>
          <h5 className='my-name'> Senghong Horn </h5>
            <small className='my-qoute'>
            " Be patient, Sometimes you have to go through the worst, to get the BEST "
            </small>
        </article>
      </div>
    </section>
  )
}

export default About
