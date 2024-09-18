import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700; /* Made font weight bolder */
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500; /* Reduced font weight for description */
  margin-bottom: 40px; /* Consistent spacing */
  color: ${({ theme }) => theme.text_secondary};
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 40px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const Skill = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: rgba(255, 255, 255, 0.05); /* Slight transparent background */
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  border: 1px solid rgba(255, 255, 255, 0.1); 
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3); /* Increased shadow depth */
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 320px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation */

  &:hover {
    transform: translateY(-10px); /* Lift effect */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5); /* More pronounced shadow on hover */
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px;
  }

  @media (max-width: 500px) {
    max-width: 320px;
    padding: 12px;
  }
`;
const SkillTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;
const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background-color: rgba(255, 255, 255, 0.1); /* Slight background for skill items */
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain; /* Ensure the image fits within its container */
  overflow: hidden;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills that I have been working on for the past 2 years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImage src={item.image} alt={item.name} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;