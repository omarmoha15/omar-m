import React from "react";
import { StyledParagraph,  } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle number="01">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Selected projects I've worked on recently.{" "}
        
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
