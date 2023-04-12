// Style
import styled from "styled-components";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div>
      <GridContainer>
        <GridItem>Test</GridItem>
        <GridItem>Test</GridItem>
        <GridItem>Test</GridItem>
        <GridItem>Test</GridItem>
        <GridItem>Test</GridItem>
        <GridItem>Test</GridItem>
      </GridContainer>
    </div>
  );
};

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 1rem;
`;

const GridItem = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: blue;
`;

export default Portfolio;
