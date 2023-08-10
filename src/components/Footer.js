import { Link } from "react-router-dom";
import '../styles/Default.css';

export default function Footer() {
    return (
        <div id="footer">
            <div>
                <img src="/img/Logo2.png" alt="Logo" style={{ height: '47px' }} />
                <p className="footer-text">
                    With WanderPlan you can experience new travel and the best
                    tourist destinations that we have to offer
                </p>
                <div id="footer-copyright">Copyright © WanderPlan 2023</div>
            </div>

            <div className="footer-nav">
                <div id="footer-nav-heading">Destination</div>
                <div id="footer-nav-content">
                    <div>Cappadocia</div>
                    <div>Ha Noi</div>
                    <div>Albuquera</div>
                </div>
            </div>
            <div className="footer-nav">
                <div id="footer-nav-heading">About</div>
                <div id="footer-nav-content">
                    <div>Contact Us</div>
                    <div>Testimoni</div>
                    <div>Rating</div>
                </div>
            </div>
            <div className="footer-nav">
                <div id="footer-nav-heading">Follow Us</div>
                <div id="footer-nav-content">
                    <div className="social-media"><img src="/img/facebook.png" alt="facebook" style={{
                        width: '9.923px',
                        height: '19.845px', marginLeft: '5px', marginRight:'5px'}}/>Facebook</div>
                    <div className="social-media"><img src="/img/twitter.png" alt="facebook" style={{
                        width: '19.556px',
                        height: '15.889px', marginLeft: '1px'}}/>Twitter</div>
                    <div className="social-media"><img src="/img/instagram.png" alt="facebook" style={{
                        width: '20px',
                        height: '20px', marginLeft: '1px'}}/>Instagram</div>
                </div>
            </div>
        </div>
    );
}