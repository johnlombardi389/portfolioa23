// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Image
import aboutBanner from "../assets/aboutBanner.png";

// Icons
import {
  SiReact,
  SiJavascript,
  SiSass,
  SiCss3,
  SiHtml5,
  SiVite,
  SiVisualstudiocode,
  SiFigma,
  SiGit,
  SiGithub,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const About = () => {
  return (
    <AboutContainer>
      <img src={aboutBanner} alt="About Me" />
      <AboutInfo>
        <AboutContact>
          <h2>About Me</h2>
          <p>
            I grew up immersing myself in video game worlds where your character
            was always growing and learning new skills. Just like an RPG, I've
            adopted leveling up as a lifestyle and this mindset has carried over
            into my career as a Software Engineer, where I am constantly seeking
            out new challenges and opportunities to grow.
          </p>

          <p>
            Combining my background in design and education with a passion for
            technology and a love of learning, I am driven to create impactful
            solutions for real-world problems. Skilled in React, I am actively
            expanding my knowledge of JavaScript and honing my full-stack
            development abilities through focused learning of the MERN stack
            (MongoDB, Express, React, Node).
          </p>

          <h2>Contact</h2>
          <p>Email:</p>
          <p>LinkedIn:</p>
        </AboutContact>

        <AboutTools>
          <h2>Toolkit</h2>
          <ul>
            <li>
              <SiReact />
              <span>React</span>
            </li>
            <li>
              <SiJavascript />
              <span>JavaScript</span>
            </li>
            <li>
              <SiSass />
              <span>Sass</span>
            </li>
            <li>
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li>
              <SiHtml5 />
              <span>HTML</span>
            </li>
            <li>
              <SiGit />
              <span>Git</span>
            </li>
            <li>
              <SiVite />
              <span>Vite</span>
            </li>
            <li>
              <SiVisualstudiocode />
              <span>VS Code</span>
            </li>
            <li>
              <SiGithub />
              <span>Github</span>
            </li>
            <li>
              <SiFigma />
              <span>Figma</span>
            </li>
            <li>
              <SiAdobephotoshop />
              <span>Photoshop</span>
            </li>
            <li>
              <SiAdobeillustrator />
              <span>Illustrator</span>
            </li>
          </ul>
        </AboutTools>
      </AboutInfo>
    </AboutContainer>
  );
};

const AboutContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const AboutInfo = styled(motion.div)`
  display: flex;
  align-items: start;
  width: 100%;
  margin: 2rem 0 2rem 5rem;
`;

const AboutContact = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  h1 {
    text-align: center;
    color: white;
  }

  p {
    margin: 0.75rem 5rem 0.75rem 0;
    color: #f4e7dc;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const AboutTools = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: start;

  h4 {
    padding-bottom: 3rem;
    font-family: sans-serif;
    color: red;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    li {
      position: relative;
      display: inline-block;
      top: 0;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem 1rem 0rem;

      svg {
        color: #0f3962;
        width: 3rem;
        height: 3rem;
        transition: all 0.5s ease;
        z-index: 5;
      }

      span {
        position: absolute;
        transition: all 0.5s ease;
        opacity: 0;
        color: transparent;
        font-family: "Nunito Sans", sans-serif;
        font-weight: 200;
        font-size: 0.85rem;
        z-index: -1;
        transition: all 0.5s ease;
      }

      &:hover {
        top: -10px;
        svg {
          color: #f9c04d;
        }
        span {
          opacity: 1;
          margin-top: 5rem;
          color: #f9c04d;
        }
      }
    }
  }
`;

export default About;
