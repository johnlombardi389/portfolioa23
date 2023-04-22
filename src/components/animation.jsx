export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    },
  },
};

export const titleAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
};

export const btnSlide = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.75,
    },
  },
};
