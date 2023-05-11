import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          "Hello, I'm Omar Mohammed, a front-end developer with experience in React.js, React Native, and .NET Core. 
          </StyledParagraph>
          <StyledParagraph>
          I specialize in creating user-friendly interfaces for web and mobile applications.
           I have a passion for building responsive websites and have expertise in developing back-end solutions with .NET Core. 
           
          </StyledParagraph>
          <StyledParagraph>
          I enjoy collaborating with teams and staying updated with the latest trends in front-end development. Feel free to reach out to me for potential collaborations. 
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-omar-mohammed"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
