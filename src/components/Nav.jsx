// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import johnlogo from "../assets/johnlogo.png";

const Nav = () => {
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

      <MyName>John Lombardi</MyName>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 3rem;
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
      color: inherit;

      svg {
        width: 1.5rem;
        height: 1.5rem;
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
  font-size: 2.25rem;
  color: #0f3962;
`;

export default Nav;
