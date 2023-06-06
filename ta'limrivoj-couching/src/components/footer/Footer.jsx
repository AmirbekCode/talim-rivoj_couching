import React from 'react';
import '../footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className='footer-main'>
            <div className="footer">
                <div className="footer-phone">
                    <h1>+998 91 984 4040</h1>
                    <p>Qo'ng'iroq qilib  ko'proq ma'lumot olishingiz mumkin</p>
                </div>
                <div className="footer-address">
                    <div className="footer-point">
                        <span className="sure-point">Mo'ljal: Xorazm shahar, Darital yoni </span>
                    </div>
                    <div className="footer-links">
                        <a href="https://www.youtube.com/@TalimRivoj/about" className="link-item">
                        <FontAwesomeIcon icon={faYoutube} style={{color: '#000'}}/>
                        </a>
                        <a href="https://t.me/TalimRivoj" className="link-item">
                        <FontAwesomeIcon icon={faTelegram} style={{color: '#000'}}/>
                        </a>
                        <a href="https://www.instagram.com/talimrivoj_company/" className="link-item">
                        <FontAwesomeIcon icon={faInstagram} style={{color: '#000'}}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
