// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import johnlogo from "../assets/johnlogo.png";

const Nav = ({ clickedName, setClickedName }) => {
  const handleAboutClose = () => {
    setClickedName((prevState) => !prevState);
  };

  return (
    <StyledNav>
      <LogoSection>
        <img src={johnlogo} alt="John's Logo" />

        <SocialNav>
          <motion.li>
            <motion.a
              href="https://www.linkedin.com/in/johnlombardi389/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a
              href="https://github.com/johnlombardi389"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a
              href="mailto:johnlombardi389@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </motion.a>
          </motion.li>
        </SocialNav>
      </LogoSection>

      <MyName onClick={() => handleAboutClose()}>John Lombardi</MyName>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto 2.5rem auto;
  max-width: 1800px;
`;

const LogoSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 1.5rem;
    padding-right: 1rem;
  }
`;

const SocialNav = styled(motion.ul)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;

  li {
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: #0f3962;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #0f3962;
      transition: all 0.3s ease-in-out;

      svg {
        width: 2rem;
        height: 2rem;
      }

      &:hover {
        color: #24709c;
      }
    }
  }

  &::before {
    content: "";
    display: block;
    width: 7rem;
    height: 0.1rem;
    background-color: #0f3962;
  }
`;

const MyName = styled(motion.h1)`
  font-size: 3rem;
  color: #0f3962;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #24709c;
  }
`;

export default Nav;
