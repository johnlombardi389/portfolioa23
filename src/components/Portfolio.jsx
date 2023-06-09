// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Project Data
import projectData from "./projectData";

// Component
import About from "./About";

// Animations
import { pageAnimation } from "/animation.jsx";

const Portfolio = ({ projectInfo, clickedName, setClickedName }) => {
  const data = projectData();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAboutClose = () => {
    setOpenAbout(false);
  };

  const handleProjectClose = () => {
    setSelectedProject(null);
  };

  const handleVideoMouseOver = (event) => {
    event.currentTarget.querySelector("video").play();
  };

  const handleVideoMouseOut = (event) => {
    event.currentTarget.querySelector("video").pause();
    event.currentTarget.querySelector("video").currentTime = 0;
  };

  return (
    <div>
      {clickedName && <About onClose={handleAboutClose} />}

      <GridContainer
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {data.map((project) => (
          <GridItem
            key={project.id}
            className={project.color}
            onClick={() => {
              setSelectedProject(project.id);
              handleScrollToTop();
            }}
            onMouseOver={handleVideoMouseOver}
            onMouseOut={handleVideoMouseOut}
          >
            <video src={project.video} preload="metadata" muted loop />
            <CardInfo>
              <h3>{project.title}</h3>
              <ul>
                {project.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </CardInfo>
            <Buttons>
              <a href={project.demo} target="_blank" className="btndemo">
                Project
              </a>
              <a href={project.github} target="_blank" className="btncode">
                Code
              </a>
            </Buttons>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 3rem;
  margin: 5rem auto;
  max-width: 1800px;
  height: auto;

  @media only screen and (max-width: 1850px) {
    margin: 0 2rem;
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 2rem 0;
    grid-gap: 1rem;
  }

  .pink {
    background-color: #fb4c8b;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 15px rgba(251, 76, 139, 0.75);
    }
  }

  .blue {
    background-color: #19a8c5;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 15px rgba(25, 168, 197, 0.75);
    }
  }

  .yellow {
    background-color: #f9c04d;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 15px rgba(249, 192, 77, 0.75);
    }
  }
`;

const GridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow: hidden;

  video {
    padding: 1rem;
    width: 100%;
    height: auto;
    object-fit: cover;

    @media only screen and (max-width: 550px) {
      padding: 0.5rem 0;
    }
  }
`;

const CardInfo = styled(motion.div)`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;

  h3 {
    margin-right: 2rem;
    color: #152339;
    font-size: 1.25rem;

    @media only screen and (max-width: 550px) {
      margin-right: 0.5rem;
      font-size: 1rem;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 1rem;

    @media only screen and (max-width: 550px) {
      margin-left: 0.5rem;
    }

    li {
      padding: 0.5rem;
      font-family: "Nunito Sans", sans-serif;
      font-weight: 400;
      font-size: 0.85rem;
      color: #0f3962;

      @media only screen and (max-width: 550px) {
        padding: 0.25rem;
        font-size: 0.75rem;
      }
    }
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30rem;
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;

  @media only screen and (max-width: 550px) {
    width: 20rem;
  }

  .btndemo {
    background-color: #0e1624;
    color: #24709c;
    transition: color 0.3s ease;

    &:hover {
      color: #f9c04d;
    }
  }

  .btncode {
    background-color: #0e1624;
    color: #24709c;

    &:hover {
      color: #f9c04d;
    }
  }

  a {
    display: inline-block;
    margin: 0 1rem 1rem 1rem;
    padding: 10px 0;
    width: 10rem;
    background-color: #4caf50;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;

export default Portfolio;
