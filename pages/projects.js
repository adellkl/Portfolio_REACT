import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import { ThemeProvider } from "next-themes";
import Project from "../components/Project";

const ProjectPage = () => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ContainerBlock title="Projets - Loukal Adel">
        <Project />
      </ContainerBlock>
    </ThemeProvider>
  );
};

export default ProjectPage;
