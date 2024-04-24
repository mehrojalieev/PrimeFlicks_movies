import React from 'react'
import './Footer.scss'
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { InstagramFilled, LinkedinFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-wrapper">
                    <div className="footer-content">
                        <Link className='footer-logo' to={'/'}>
                            <span>Prime</span>
                            <span>Flicks</span>
                        </Link>
                        <p className='prime-link'>info@primeflicks.com</p>
                        <div className="footer__social-action">
                            <i><InstagramFilled /></i>
                            <i><YoutubeFilled /></i>
                            <i><TwitterOutlined /></i>
                            <i><LinkedinFilled /></i>
                        </div>
                    </div>
                    <ul className="footer-menu">
                        <li className='menu-item'>FAQ</li>
                        <li className="menu-item">Investor relation</li>
                        <li className="menu-item">Privacy</li>
                        <li className="menu-item">Speed test</li>
                    </ul>
                    <ul className="footer-menu">
                        <li className='menu-item'>Help center</li>
                        <li className="menu-item">Jobs</li>
                        <li className="menu-item">cookies preferences</li>
                        <li className="menu-item">Legal noticces</li>
                    </ul>
                    <ul className="footer-menu">
                        <li className='menu-item'>Account</li>
                        <li className="menu-item">Ways to watch</li>
                        <li className="menu-item">Corparate information</li>
                        <li className="menu-item">Only on Primeflicks</li>
                    </ul>
                    <ul className="footer-menu">
                        <li className='menu-item'>Media center</li>
                        <li className="menu-item">terms of us</li>
                        <li className="menu-item">Contact Us</li>
                        <li className="menu-item">Subscription</li>
                    </ul>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
