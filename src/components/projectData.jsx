// Images
import layoutGen from "../assets/layoutGen.png";
import musicPlay from "../assets/musicPlay.png";
import pixelSketch from "../assets/pixelSketch.png";
import rockPaper from "../assets/rockPaper.png";
import signUp from "../assets/signUp.png";
import travelApp from "../assets/travelApp.png";

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

const projectData = () => [
  {
    id: 1,
    title: "Layout Generator",
    description:
      "PGenerate layouts for your website with this generator you can use in your browser.",
    tools: ["React", "JavaScript", "CSS", "HTML"],
    color: "pink",
    image: layoutGen,
    demo: "https://johnlombardi389.github.io/layout-generator/",
    github: "https://github.com/johnlombardi389/layout-generator",
    toolkit: ["JavaScript", "CSS", "HTML", "Git", "Figma"],
    toolkitIcons: [
      <SiJavascript />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiGit />,
      <SiFigma />,
    ],
  },
  {
    id: 2,
    title: "Sign Up",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Python", "Node", "Express", "HTML"],
    color: "blue",
    image: signUp,
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    toolkit: ["React", "JavaScript", "Sass", "CSS", "HTML", "Git", "Figma"],
    toolkitIcons: [
      <SiReact />,
      <SiJavascript />,
      <SiSass />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiGit />,
      <SiFigma />,
    ],
  },
  {
    id: 3,
    title: "Music Player",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Figma", "Flask", "Express", "HTML"],
    color: "yellow",
    image: musicPlay,
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    toolkit: ["React", "JavaScript", "Vite", "CSS", "HTML", "Git", "VS Code"],
    toolkitIcons: [
      <SiReact />,
      <SiJavascript />,
      <SiVite />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiGit />,
      <SiVisualstudiocode />,
    ],
  },
  {
    id: 4,
    title: "Travel App",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["Photoshop", "Git", "GitHub", "VS Code"],
    color: "blue",
    image: travelApp,
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    toolkit: ["Vite", "JavaScript", "Sass", "CSS", "HTML", "Git", "Figma"],
    toolkitIcons: [
      <SiVite />,
      <SiJavascript />,
      <SiSass />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiGit />,
      <SiFigma />,
    ],
  },
  {
    id: 5,
    title: "Pixel Sketch",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["JavaScript", "SASS", "CSS", "HTML"],
    color: "yellow",
    image: pixelSketch,
    demo: "https://johnlombardi389.github.io/pixel-sketch/",
    github: "https://github.com/johnlombardi389/pixel-sketch",
    toolkit: ["JavaScript", "CSS", "HTML", "Git", "Figma"],
    toolkitIcons: [
      <SiJavascript />,
      <SiCss3 />,
      <SiHtml5 />,
      <SiGit />,
      <SiFigma />,
    ],
  },
  {
    id: 6,
    title: "RPS Game",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["JavaScript", "Illustrator", "Figma", "HTML"],
    color: "pink",
    image: rockPaper,
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    toolkit: ["React", "JavaScript", "Sass", "Git", "Figma"],
    toolkitIcons: [
      <SiReact />,
      <SiJavascript />,
      <SiSass />,
      <SiGit />,
      <SiFigma />,
    ],
  },
];

export default projectData;
