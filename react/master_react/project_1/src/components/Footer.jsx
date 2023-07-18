import React from 'react';

const Footer = () =>{
    return(
        <>
            <footer>
    <div className="quicklinks">
        <div className="footerabout">
            <h5>About us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta eligendi officiis enim non maxime laboriosam saepe ipsam similique vitae libero, fugiat, necessitatibus quod? Dolore magni eveniet facilis fugit atque.</p>
            <div className="icons">
                <a href="https://www.instagram.com/"><img src="css\images\social_media_photo.png" alt=""/></a>
            </div>    
        </div>
        <div className="collegsite">
            <h5>Offical Links</h5>
            <ul>
                <li><a href="https://mmcoe.edu.in/">MMCOE Offical link</a></li>
                <li><a href="teams\supra.html">Team Abhedya Racers</a></li>
                <li><a href="teams\efficycle.html">Team Achilles</a></li>
                <li><a href="teams\robocon.html">Team Rudra</a></li>
                <li><a href="teams\nss.html">Team NSS</a></li>
                <li><a href="teams\ncc.html">Team NCC</a></li>
            </ul>
        </div>
        <div className="extra">
            <h5>More information</h5>
            <ul>
                <li><a href="about.html">About us</a></li>
                <li><a href="css\etc\faculty.html">Our  Faculty</a></li>
            </ul>
        </div>
        <div className="contactmail">
            <h5>Reach to us</h5>
            <ul>
                <li><a href="contact.html">Contact with website developer</a></li>
                <li><a href="">Captain of Team Abhedya Racing (Baja)</a></li>
                <li><a href="">Captain of Team Abhedya Racers (Supra)</a></li>
                <li><a href="">Captain of Team Achilles</a></li>
                <li><a href="">Captain of Team Rudra</a></li>
                <li><a href="">Captain of Team NSS</a></li>
                <li><a href="">Captain of Team NCC</a></li>
            </ul>
        </div>
        <div className="footerdevcon">
            <h5>Contact Us</h5>
            <div className="phone">
                <img src="css\images\close.png"/>
                <p>+91 87**** *****</p>
            </div>
            <div className="email">
                <img src="css\images\close.png"/>
                <p>12kunalgaikwad@gmail.com</p>
            </div>
        </div>
    </div>
    <hr/>
    <div className="sociallinks">
        <h4>Disclaimer</h4>
        <p>Marathwada Mitra Mandal's College of Engineering is not responsible for any changes or updates to the student activities mentioned on this website.Please refer to official communications for the most accurate and up-to-date information.</p>
        <h6>Copyright&copy; 2023 Kunal Gaikwad. All Right Reserved</h6>
    </div>
</footer>
        </>
    );
};

export default Footer;