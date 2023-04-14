import { useState } from "react";

// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// // Images
// import layoutGen from "../assets/layoutGen.png";
// import musicPlay from "../assets/musicPlay.png";
// import pixelSketch from "../assets/pixelSketch.png";
// import rockPaper from "../assets/rockPaper.png";
// import signUp from "../assets/signUp.png";
// import travelApp from "../assets/travelApp.png";

// Project Data
import projectData from "./projectData";

const Portfolio = (projectInfo) => {
  const data = projectData();

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {/* {isProjectClicked? <Project /> : } */}

      {selectedProject && (
        <div>
          <h3>Hello there new component {selectedProject}</h3>
        </div>
      )}

      <GridContainer>
        {data.map((project) => (
          <GridItem
            key={project.id}
            className={project.color}
            onClick={() => setSelectedProject(project.id)}
          >
            <img src={project.image} alt={project.title} />
            <CardInfo>
              <h3>{project.title}</h3>
              <ul>
                {project.tools.map((tool) => (
                  <li>{tool}</li>
                ))}
              </ul>
            </CardInfo>
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
  margin: 3rem auto;
  max-width: 1800px;

  .pink {
    background-color: #fb4c8b;

    &:hover {
      box-shadow: rgba(251, 76, 139, 0.15) 0px 8px 24px,
        rgba(251, 76, 139, 0.15) 0px 16px 56px,
        rgba(251, 76, 139, 0.15) 0px 24px 80px;
    }
  }

  .blue {
    background-color: #19a8c5;
    &:hover {
      box-shadow: rgba(25, 168, 197, 0.15) 0px 8px 24px,
        rgba(25, 168, 197, 0.15) 0px 16px 56px,
        rgba(25, 168, 197, 0.15) 0px 24px 80px;
    }
  }

  .yellow {
    background-color: #f9c04d;
    &:hover {
      box-shadow: rgba(249, 192, 77, 0.15) 0px 8px 24px,
        rgba(249, 192, 77, 0.15) 0px 16px 56px,
        rgba(249, 192, 77, 0.15) 0px 24px 80px;
    }
  }
`;

const GridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  background-color: blue;
  cursor: pointer;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  img {
    padding: 1rem;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const CardInfo = styled(motion.div)`
  display: flex;
  align-items: baseline;
  margin-bottom: 1rem;

  h3 {
    margin-right: 2rem;
    color: #152339;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 1rem;

    li {
      padding: 0.5rem;
      font-family: "Nunito Sans", sans-serif;
      font-weight: 400;
      font-size: 0.85rem;
      color: #0f3962;
    }
  }
`;

export default Portfolio;
