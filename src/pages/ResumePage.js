import React from "react";
import Box from "@material-ui/core/Box";
import MarkdownComponent from "../components/MarkdownComponent";
import ExperienceDoc from "../components/docs/Experience.md";
import EducationDoc from "../components/docs/Education.md";
import SkillsDoc from "../components/docs/Skills.md";
import AccomplishmentsDoc from "../components/docs/Accomplishments.md";

export default function ResumePage() {
  return (
    <Box p={3}>
      <MarkdownComponent title="Experience" markdownContent={ExperienceDoc} />
      <MarkdownComponent
        title="Accomplishments"
        markdownContent={AccomplishmentsDoc}
      />
      <MarkdownComponent title="Skills" markdownContent={SkillsDoc} />
      <MarkdownComponent title="Education" markdownContent={EducationDoc} />
    </Box>
  );
}
