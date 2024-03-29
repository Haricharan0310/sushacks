import React, { useEffect, useState } from "react";
import contactUsImage from "../../assets/board1.svg";
import contactUsMobileImage from "../../assets/Rectangle.png";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/Group 411.png";
import twitter from "../../assets/twitter.svg";
import mail from "../../assets/Mail.svg";
import discord from "../../assets/discord.svg";
import "./Contactus.css";
import resLinkedin from "./assets/Social Icons (2).png";
import resDiscord from "./assets/Vector.png";
import resX from "./assets/Social Icons (1).png";
import resInsta from "./assets/Social Icons (3).png";

function Contact() {
  const [width, setWidth] = useState(window.innerWidth);
  const [contactImage, setContactImage] = useState(
    width <= 740 ? contactUsImage : contactUsMobileImage
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width <= 740) setContactImage(contactUsMobileImage);
    else setContactImage(contactUsImage);
  }, [width]);

  return (
    <div id="contactus" className=" contact-container">
      <img src={contactImage} alt="Contact Us" className="contact-image" />
      <a
        href="https://www.instagram.com/sus_hacks_viit?igsh=OHY1cTI0dzNtNjYz"
        target="_blank"
        rel="noopener noreferrer"
        id="insta"
      >
        <img src={insta} alt="insta" />
      </a>
      <a
        href="https://www.linkedin.com/in/sus-hacks-viit-4310542bb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" id="linkedin" />
      </a>
      <a
        href="https://twitter.com/sushacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" id="twitter" />
      </a>
      <a
        href="sushacks.viit@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mail} alt="mail" id="mail" />
      </a>

      <a
        href="https://discord.gg/sQeNpDWQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discord} alt="discord" id="discord" />
      </a>
      <div className="responsive-links">
        <a href="https://www.instagram.com/sus_hacks_viit?igsh=OHY1cTI0dzNtNjYz" target="_blank">
          <img src={resInsta} id="r-insta" />
        </a>
        <a href="https://www.linkedin.com/in/sus-hacks-viit-4310542bb/" target="_blank">
          <img src={resLinkedin} id="r-linkedin" />
        </a>
        <a href="https://discord.gg/sQeNpDWQ" target="_blank">
          <img src={resDiscord} id="r-discord" />
        </a>
        <a href="https://twitter.com/sushacks" target="_blank">
          <img src={resX} id="r-X" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
