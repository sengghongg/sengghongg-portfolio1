import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {TbBrandTelegram} from 'react-icons/tb'
import {MdOutlinePhoneAndroid} from 'react-icons/md'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {GrInstagram} from 'react-icons/gr'
import {CiLinkedin} from 'react-icons/ci'
import {TbBrandTwitter} from 'react-icons/tb'

const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>
      
      <div className="container contact_container">
        <div className="contact-options">  
        <article className='contact__option'>
            <MdOutlinePhoneAndroid className='contact__option-icon'/>
            <div>
            <h4> Phone </h4>
            <h5> (+885) 889 423 519  </h5>
            </div>
          </article>
          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon' />
            <div>
            <h4> Telegram </h4>
            <h5> t.me/sengghongg  </h5>
            </div>
          </article>
        </div>
        <div>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <div>
            <h4> Email </h4>
            <h5> horn.senghong19@kit.edu.kh </h5>
            </div>
          </article>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <div>
            <h4> Personal Email </h4>
            <h5> sengghongg@gmail.com </h5>
            </div>
          </article> 
        </div>
        <div>
        <article className='contact__option'>
            <CiLinkedin className='contact__option-icon' />
            <div>
            <h4> LinkedIn </h4>
            <h5> Senghong Horn </h5>
            </div>
          </article>

          <article className='contact__option'>
            <RiFacebookCircleLine className='contact__option-icon' />
            <div>
            <h4> Facebook </h4>
            <h5> sengghongg </h5>
            </div>
          </article>
        </div>
        <div>
          <article className='contact__option'>
            <GrInstagram className='contact__option-icon' />
            <div>
            <h4> Instargram </h4>
            <h5> sengghongg </h5>
            </div>
          </article> 

          <article className='contact__option'>
            <TbBrandTwitter className='contact__option-icon' />
            <div>
            <h4> Twitter </h4>
            <h5> sengghongg </h5>
            </div>
          </article>
        </div>
        {/*END OF CONTACT  OPTIONS*/} 
      </div>
    </section>
  )
}

export default Contact