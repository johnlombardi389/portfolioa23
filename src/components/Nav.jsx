// Style
import styled from "styled-components";
import { motion } from "framer-motion";

// Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

const Nav = () => {
  return (
    <nav>
      <SocialNav>
        <SocialLink>
          <motion.a
            href="https://www.linkedin.com/in/johnlombardi389/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </motion.a>
        </SocialLink>
        <SocialLink>
          <motion.a
            href="https://github.com/johnlombardi389"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </motion.a>
        </SocialLink>
        <SocialLink>
          <motion.a
            href="mailto:johnlombardi389@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </motion.a>
        </SocialLink>
      </SocialNav>
    </nav>
  );
};

const SocialNav = styled(motion.ul)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  li {
    margin: 0.5rem;
    padding: 0.5rem;
    color: green;

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
    background-color: green;
  }
`;

const SocialLink = styled(motion.li)`
  padding: 0.5rem;
  margin: 0.5rem;
`;

export default Nav;
