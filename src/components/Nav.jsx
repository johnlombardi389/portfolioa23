// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import johnLogo from "../assets/johnLogo.svg";

const Nav = ({ clickedName, setClickedName }) => {
  const handleAboutClose = () => {
    setClickedName((prevState) => !prevState);
  };

  return (
    <StyledNav>
      <LogoSection>
        <img src={johnLogo} alt="John's Logo" />

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

  @media only screen and (max-width: 1850px) {
    margin: 0 2rem;
  }

  @media only screen and (max-width: 815px) {
    flex-direction: column;
    margin: 2rem 0;
  }
`;

const LogoSection = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 2rem;
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
    color: #24709c;
    cursor: pointer;

    a {
      text-decoration: none;
      color: #24709c;
      transition: all 0.3s ease-in-out;

      svg {
        width: 2rem;
        height: 2rem;

        @media only screen and (max-width: 380px) {
          width: 1.5rem;
          height: 1.5rem;
        }
      }

      &:hover {
        color: #f9c04d;
      }
    }
  }

  &::before {
    content: "";
    display: block;
    width: 7rem;
    height: 0.1rem;
    background-color: #24709c;
  }
`;

const MyName = styled(motion.h1)`
  font-size: 3rem;
  color: #24709c;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 815px) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 2rem;
  }

  &:hover {
    color: #f9c04d;
  }
`;

export default Nav;
