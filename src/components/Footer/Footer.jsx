import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Phone:  <a href={`tel:${'0030' + 6943120920}`} rel="noreferrer">{'0030' + 6943120920}</a> or <a href={`tel:${'0030' + 6974472539}`} rel="noreferrer">{'0030' + 6974472539}</a></p>
                    <p>Email: <a href="mailto:example@example.com" rel="noreferrer">marmaraki.apartment@gmail.com</a></p>
                    <p>Address: Kastraki, Trikala, Greece 42200</p>
                </div>
                <div className="site-navigation">
                    <h4>Navigation</h4>
                    <ul className="nav-links">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/monasteries' >Monasteries</Link></li>
                        <li><Link to='/activities' >Explore</Link></li>
                        {/* <li><Link to='/restaurants'>Restaurants</Link></li> */}
                        <li><Link to='/help' >Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Marmaraki. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;