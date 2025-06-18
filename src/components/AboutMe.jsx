import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me" id="about">

      <div className="about-me__top-banner" data-aos="fade-up">
        <div className="about-me__top-text">
          <h2>Пока не знаю что</h2>
          <p>
            Hi! I'm Yehor, a high school student from Poland with a passion for front-end development and creative coding. I enjoy turning ideas into interactive websites and apps. I'm currently learning React.js and building projects to improve my skills. Whether it's creating games in Scratch or working with modern JavaScript frameworks, I love exploring new technologies and bringing my ideas to life.
          </p>
        </div>
      </div>

      <div className="about-me__title-box" data-aos="zoom-in">
        <h2>ABOUT ME</h2>
      </div>
      <p className="about-me__description" data-aos="fade-right">
        Hi! I'm Egor, a student from Ukraine with a passion for front-end development and creative coding. I enjoy turning ideas into interactive websites and apps. Also I always practise to improve my skills.
      </p>
      <div className="about-me__explore" data-aos="fade-left">
        <span>|</span>
        <p>EXPLORE</p>
        <span>|</span>
      </div>

      <div className="about-me__services">
        <div className="about-me__service" data-aos="flip-left">
          <h3>DESIGN</h3>
          <p>I enjoy designing clean, modern user interfaces and layouts that are both functional and aesthetically pleasing. I often draw inspiration from Figma designs and bring them to life in code.</p>
        </div>
        <div className="about-me__service" data-aos="flip-up">
          <h3>DEVELOPMENT</h3>
          <p>I build responsive web applications using HTML, CSS, and JavaScript, and I'm currently focused on learning React. I also have experience working with Scratch, Unity, NodeJS.</p>
        </div>
        <div className="about-me__service" data-aos="flip-right">
          <h3>MAINTENANCE</h3>
          <p>I'm always improving my projects, fixing bugs, and optimizing user experience. I believe good code should not only work — it should be maintainable and scalable.</p>
        </div>
      </div>

      <div className="skills__title-box" data-aos="zoom-in">
        <h2>SKILLS</h2>
      </div>

      <div className="skills__section" data-aos="fade-up">
        <h3>USING NOW:</h3>
        <div className="skills__grid">
          <SkillItem img="html.svg" label="HTML5" />
          <SkillItem img="css.svg" label="CSS3" />
          <SkillItem img="scratch-cat-png.png" label="Scratch" />
          <SkillItem img="js.svg" label="JavaScript" />
          <SkillItem img="react.svg" label="React" />
          <SkillItem img="bootstrap.svg" label="Bootstrap" />
          <SkillItem img="git.svg" label="Git" />
          <SkillItem img="figma.svg" label="Figma" />
        </div>
      </div>

      <div className="skills__section" data-aos="fade-up">
        <h3>LEARNING:</h3>
        <div className="skills__grid">
          <SkillItem img="node.png" label="NodeJS" />
          <SkillItem img="MongoDB.svg" label="MongoDB" />
          <SkillItem img="react.svg" label="React Native" />
        </div>
      </div>

      <div className="skills__section" data-aos="fade-up">
        <h3>OTHER SKILLS:</h3>
        <div className="skills__grid">
          <SkillItem img="ang.svg" label="English B2" />
          <SkillItem img="pol.png" label="Polish  C1" />
          <SkillItem img="ua.png" label="Ukrainian С2" />
          <SkillItem img="ru.png" label="Russian С2" />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ img, label }) => (
  <div className="skill-item" data-aos="zoom-in">
    <img src={`${process.env.PUBLIC_URL}/icons/${img}`} alt={label} />
    <p>{label}</p>
  </div>
);

export default AboutMe;