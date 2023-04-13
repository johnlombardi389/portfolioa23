// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Images
import layoutGen from "../assets/layoutGen.png";
import musicPlay from "../assets/musicPlay.png";
import pixelSketch from "../assets/pixelSketch.png";
import rockPaper from "../assets/rockPaper.png";
import signUp from "../assets/signUp.png";
import travelApp from "../assets/travelApp.png";

const Portfolio = () => {
  return (
    <div>
      <GridContainer>
        <GridItem className="pink">
          <img src={layoutGen} alt="Layout Generator" />
          <CardInfo>
            <h3>Layout Generator</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
        <GridItem className="blue">
          <img src={signUp} alt="Layout Generator" />
          <CardInfo>
            <h3>Sign Up</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
        <GridItem className="yellow">
          <img src={musicPlay} alt="Layout Generator" />
          <CardInfo>
            <h3>Music Player</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
        <GridItem className="blue">
          <img src={travelApp} alt="Layout Generator" />
          <CardInfo>
            <h3>Travel App</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
        <GridItem className="yellow">
          <img src={pixelSketch} alt="Layout Generator" />
          <CardInfo>
            <h3>Pixel Sketch</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
        <GridItem className="pink">
          <img src={rockPaper} alt="Layout Generator" />
          <CardInfo>
            <h3>RPS Game</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>Figma</li>
            </ul>
          </CardInfo>
        </GridItem>
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
      font-size: 0.75rem;
    }
  }
`;

export default Portfolio;
