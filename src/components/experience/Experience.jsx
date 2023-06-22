import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Dev </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> HTML CSS JavaScript </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Bootstrap </h4>
                <small className='text-light'> Experienced </small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Vue </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> React </h4>
                <small className='text-light'> Experienced </small> 
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Github / GitLab </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

          </div>
        </div>

        {/* End of Front End */}

        <div className="experience__cybersecurity">
          <h3> Cybersecurity  </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Penetration Testing </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Ethical Hacking  </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Web Application Security  </h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Vulnerability Assessment </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> OWASP </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

          </div>
        </div>

        {/* End of CyberSecurity*/}

         <div className="experience__data-annotation">
          <h3> Data Annotator </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Baobab / V7 Tool </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Data Analyst  </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Team Leadership  </h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Communication </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Teamwork </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

          </div>
        </div> 

        {/* End of Data Annotation */}

        <div className="experience__digital-marketing">
          <h3> Digital Marketing  </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Content Writer / Copy Writer </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4> Manage Social Media Platform </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Strategic Planning  </h4>
                <small className='text-light'> Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience