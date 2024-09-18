import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;`
;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  z-index: 2;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineWrapper = styled(VerticalTimeline)`
  width: 100%;
  &::before {
    background-color: ${({ theme }) => theme.primary};
  }

  .vertical-timeline-element-content {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }
  }

  .vertical-timeline-element-title {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
  }

  .vertical-timeline-element-subtitle {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
  }

  .vertical-timeline-element-icon {
    background-color: ${({ theme }) => theme.primary};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  .vertical-timeline-element-content p {
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary + "b3"};
  }
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. Below are my educational highlights.
        </Desc>

        <TimelineWrapper>
          {education.map((educationItem, index) => (
            <EducationCard key={`education-${index}`} education={educationItem} />
          ))}
        </TimelineWrapper>

        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
