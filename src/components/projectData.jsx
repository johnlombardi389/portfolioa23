// Images
import layoutGen from "../assets/layoutGen.png";
import musicPlay from "../assets/musicPlay.png";
import pixelSketch from "../assets/pixelSketch.png";
import rockPaper from "../assets/rockPaper.png";
import signUp from "../assets/signUp.png";
import travelApp from "../assets/travelApp.png";

const projectData = () => [
  {
    id: 1,
    title: "Layout Generator",
    description:
      "PGenerate layouts for your website with this generator you can use in your browser.",
    tools: ["React", "JavaScript", "CSS", "HTML"],
    color: "pink",
    image: layoutGen,
  },
  {
    id: 2,
    title: "Sign Up",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Python", "Node", "Express", "HTML"],
    color: "blue",
    image: signUp,
  },
  {
    id: 3,
    title: "Music Player",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Figma", "Flask", "Express", "HTML"],
    color: "yellow",
    image: musicPlay,
  },
  {
    id: 4,
    title: "Travel App",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Photoshop", "Git", "GitHub", "VS Code"],
    color: "blue",
    image: travelApp,
  },
  {
    id: 5,
    title: "Pixel Sketch",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["JavaScript", "SASS", "CSS", "HTML"],
    color: "yellow",
    image: pixelSketch,
  },
  {
    id: 6,
    title: "RPS Game",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["JavaScript", "Illustrator", "Figma", "HTML"],
    color: "pink",
    image: rockPaper,
  },
];

export default projectData;
