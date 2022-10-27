import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Company</h4>
                    <ul>
                        <li><a href='/'>about us</a></li>
                        <li><a href='/'>our services</a></li>
                        <li><a href='/'>privacy policy</a></li>
                        <li><a href='/'>subsidiaries</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>get help</h4>
                    <ul>
                        <li><a href='/'>FAQ</a></li>
                        <li><a href='/'>shipping</a></li>
                        <li><a href='/'>returns</a></li>
                        <li><a href='/'>payment options</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>online tickets</h4>
                    <ul>
                        <li><a href='/'>adventure</a></li>
                        <li><a href='/'>mystery</a></li>
                        <li><a href='/'>adrenaline</a></li>
                        <li><a href='/'>luxury</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>follow us</h4>
                    <div className='social-links'>
                        <a href='/'><i className='fa fa-twitter'></i></a>
                        <a href='/'><i className='fa fa-facebook'></i></a>
                        <a href='/'><i className='fa fa-instagram'></i></a>
                        <a href='/'><i className='fa fa-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;