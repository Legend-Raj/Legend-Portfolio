import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme, keyframes } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

// Keyframes for menu slide-in animation
const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

// Keyframes for link hover animation
const hoverEffect = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  transition: background-color 0.3s ease-in-out;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled(LinkR)`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    width: 0;
    transition: width 0.4s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none; /* Remove underline */
  transition: all 0.6s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    transform: scale(1.1);
  }

  svg {
    margin-right: 8px; /* Add some spacing between icon and text */
  }
`;

const MobileIcon = styled.div`
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    display: flex;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light}99;
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.6s ease forwards;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">Legend-Raj</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <Button
              href={Bio.github}
              target="_blank"
              style={{ background: theme.primary, color: theme.text_primary }}
            >
              <FaGithub /> Github Profile
            </Button>
            <Button
              href={Bio.linkedin}
              target="_blank"
              style={{ background: theme.primary, color: theme.text_primary }}
            >
              <FaLinkedin /> LinkedIn Profile
            </Button>
          </MobileMenu>
        )}

        <ButtonContainer>
          <Button href={Bio.github} target="_blank">
            <FaGithub /> Github Profile
          </Button>
          <Button href={Bio.linkedin} target="_blank">
            <FaLinkedin /> LinkedIn Profile
          </Button>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
