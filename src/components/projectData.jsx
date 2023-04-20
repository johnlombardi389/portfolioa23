// Videos
import gamePacVid from "../assets/gamePacVid.mp4";
import layoutGenVid from "../assets/layoutGenVid.mp4";
import musicPlayerVid from "../assets/musicPlayerVid.mp4";
import pixelSketchVid from "../assets/pixelSketchVid.mp4";
import portVid from "../assets/portVid.mp4";
import rpsVid from "../assets/rpsVid.mp4";

const projectData = () => [
  {
    id: 1,
    title: "Game Pac",
    description:
      "A gaming website that allows users to discover and learn about upcoming games, view popular titles, and search for specific games of interest.",
    tools: ["React", "Redux", "JavaScript", "Sass"],
    color: "pink",
    demo: "https://johnlombardi389.github.io/game-tracker/",
    github: "https://github.com/johnlombardi389/game-tracker",
    video: gamePacVid,
  },
  {
    id: 2,
    title: "Music Player",
    description:
      "Browse and play songs from the library, with the ability to skip forward and back.",
    tools: ["React", "JavaScript", "Sass", "Git"],
    color: "blue",
    demo: "https://johnlombardi389.github.io/music-player/",
    github: "https://github.com/johnlombardi389/music-player",
    video: musicPlayerVid,
  },
  {
    id: 3,
    title: "Pixel Sketch",
    description:
      "A web-based application inspired by the classic etch-a-sketch toy. The app allows users to create drawings on a digital canvas by manipulating pixels.",
    tools: ["JavaScript", "CSS", "HTML", "Figma"],
    color: "yellow",
    demo: "https://johnlombardi389.github.io/pixel-sketch/",
    github: "https://github.com/johnlombardi389/pixel-sketch",
    video: pixelSketchVid,
  },
  {
    id: 4,
    title: "Layout Generator",
    description:
      "A tool that both developers and designers can use for inspiration in creating websites.",
    tools: ["JavaScript", "CSS", "HTML", "Git"],
    color: "blue",
    demo: "https://johnlombardi389.github.io/layout-generator/",
    github: "https://github.com/johnlombardi389/layout-generator",
    video: layoutGenVid,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Pixel Sketch is a web-based application inspired by the classic etch-a-sketch toy. The app allows users to create drawings on a digital canvas by manipulating pixels, similar to the way one would use a physical etch-a-sketch. The app is built using a combination of technologies, including vanilla JavaScript, CSS, and HTML. The project was managed and version controlled using Git, and the design of the app was created using Figma.",
    descriptionTwo:
      "The main feature of Pixel Sketch is its customizable canvas, which allows users to adjust the size of the canvas and the color of the pixels. Additionally, the app includes a toggle function that allows users to turn on and off a grid overlay on the canvas, giving them more precise control over their drawings. The app is designed with a simple and intuitive user interface, making it easy for anyone to start creating their own digital etch-a-sketches.",
    tools: ["React", "JavaScript", "Sass", "Vite"],
    color: "yellow",
    demo: "https://johnlombardi389.github.io/portfolio/",
    github: "https://github.com/johnlombardi389/portfolio",
    video: portVid,
  },
  {
    id: 6,
    title: "RPS Game",
    description: "This a game to play Rock, Paper, Scissors on your computer",
    tools: ["JavaScript", "CSS", "HTML", "Git"],
    color: "pink",
    demo: "https://johnlombardi389.github.io/rock-paper-scissors/",
    github: "https://github.com/johnlombardi389/rock-paper-scissors",
    video: rpsVid,
  },
];

export default projectData;
