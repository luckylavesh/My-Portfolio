import React from "react";
import hero from "../assets/images/1.png";

const socialMediaLinks = [
  { name: "LinkedIn", icon: "logo-linkedin", url: "https://www.linkedin.com/in/lavesh-soni-161bb0200/" },
  { name: "Instagram", icon: "logo-github", url: "https://github.com/luckylavesh" },
  { name: "Facebook", icon: "logo-facebook", url: "https://www.facebook.com/yashlavesh" },
  { name: "Twitter", icon: "logo-twitter", url: "https://twitter.com" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-scale-down" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span> 
            My Name is <span>Lavesh Soni</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Programmer
          </h4>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Fullstack Developer
          </h4>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Tech Enthusiast
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMediaLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={link.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
