import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (

    <section className="about-me">
        <div className="about-me__top-banner">
  <div className="about-me__top-text">
    <h2>Пока не знаю что</h2>
    <p>
      Hi! I'm Yehor, a high school student from Poland with a passion for front-end development and creative coding. I enjoy turning ideas into interactive websites and apps. I'm currently learning React.js and building projects to improve my skills. Whether it's creating games in Scratch or working with modern JavaScript frameworks, I love exploring new technologies and bringing my ideas to life.
    </p>
    <div className="about-me__explore">
      {/* <span>|</span> */}
      {/* <span>READ MORE</span> */}
      {/* <span>|</span> */}
    </div>
  </div>
  
</div>
      <div className="about-me__title-box">
        <h2>ABOUT ME</h2>
      </div>
      <p className="about-me__description">
        Hi! I'm Egor,  student from Ukraine with a passion for front-end development and creative coding. I enjoy turning ideas into interactive websites and apps. Also I always practise to improve my skills.
      </p>
      <div className="about-me__explore">
        <span>|</span>
        <p>EXPLORE</p>
        <span>|</span>
      </div>
      
      <div className="about-me__services">
        <div className="about-me__service">
          <h3>DESIGN</h3>
          <p>I enjoy designing clean, modern user interfaces and layouts that are both functional and aesthetically pleasing. I often draw inspiration from Figma designs and bring them to life in code.</p>
        </div>
        <div className="about-me__service">
          <h3>DEVELOPMENT</h3>
          <p>I build responsive web applications using HTML, CSS, and JavaScript, and I'm currently focused on learning React. I also have experience working with Scratch , Unity , nodeJS.</p>
        </div>
        <div className="about-me__service">
          <h3>MAINTENANCE</h3>
          <p>I'm always improving my projects, fixing bugs, and optimizing user experience. I believe good code should not only work — it should be maintainable and scalable.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
