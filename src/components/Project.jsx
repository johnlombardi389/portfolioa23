// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = ({ selectedData, onClose }) => {
  return (
    <div>
      {selectedData.map((project) => (
        <ProjectView key={project.id}>
          <img src={project.image} alt={project.title} />
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.descriptionTwo}</p>
            <Buttons>
              <a href={project.demo} target="_blank" className="black-btn">
                Live Demo
              </a>
              <a href={project.github} target="_blank" className="white-btn">
                GitHub
              </a>
            </Buttons>
            <button onClick={onClose}>Close Project</button>
          </div>
        </ProjectView>
      ))}

      <ProjectDetails>
        {selectedData.map((project) => (
          <SkillsList key={project.id}>
            <h4>{project.title} Toolkit</h4>
            <ul>
              {project.toolkitIcons.map((icon, index) => (
                <li key={index}>
                  {icon}
                  <span>{project.toolkit[index]}</span>
                </li>
              ))}
            </ul>
          </SkillsList>
        ))}
      </ProjectDetails>
    </div>
  );
};

const ProjectView = styled(motion.div)`
  width: 100%;
  max-width: 1800px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 0 auto;

  img {
    padding: 1rem;
    max-width: 100%;
    height: 50vh;
    object-fit: cover;
  }
`;

const Buttons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
  margin: 2rem auto;

  .black-btn {
    background-color: black;
  }

  .white-btn {
    background-color: white;
  }

  a {
    display: inline-block;
    margin: 0.5rem 0.5rem;
    padding: 10px 20px;
    width: 15rem;
    background-color: #4caf50;
    color: blue;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
`;

const ProjectDetails = styled(motion.div)`
  max-width: 1800px;
  margin: auto;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h4 {
    padding-bottom: 3rem;
    font-family: sans-serif;
    color: white;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    li {
      padding: 1rem 2rem;
      position: relative;
      display: inline-block;
      top: 0;
      transition: all 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        color: green;
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
        font-family: sans-serif;
        z-index: -1;
      }

      &:hover {
        top: -10px;
        svg {
          color: white;
        }
        span {
          opacity: 1;
          margin-top: 5rem;
          color: white;
        }
      }
    }
  }
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export default Project;
