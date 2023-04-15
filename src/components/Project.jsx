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
            </div>
          </ProjectView>
        ))}
      </ProjectView>
    </div>
  );
};

const ProjectView = styled(motion.div)`
  width: 50vw;
  height: 100%;
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

export default Project;
