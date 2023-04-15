// Style
import styled from "styled-components";
import { motion } from "framer-motion";

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
} from "react-icons/si";

const Project = ({ selectedData }) => {
  return (
    <div>
      <ProjectView>
        {selectedData.map((project) => (
          <ProjectView key={project.id}>
            <img src={project.image} alt={project.title} />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Buttons>
                <a href={project.demo} target="_blank">
                  Live Demo
                </a>
                <a href={project.github} target="_blank">
                  GitHub
                </a>
              </Buttons>
            </div>
          </ProjectView>
        ))}
      </ProjectView>
    </div>
  );
};

const ProjectView = styled(motion.div)`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  margin: 0 auto;

  img {
    padding: 1rem;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 15rem;
  margin: 2rem auto;

  a {
    display: inline-block;
    margin: 0.5rem 0;
    padding: 10px 20px;
    width: 100%;
    background-color: #4caf50;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
`;

export default Project;
