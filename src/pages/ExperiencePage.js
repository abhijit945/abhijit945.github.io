import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import MarkdownComponent from "../components/MarkdownComponent";
import ExperienceDoc from "../components/docs/Experience.md";
import EducationDoc from "../components/docs/Education.md";
import AccomplishmentsDoc from "../components/docs/Accomplishments.md";

export default function ExperiencePage() {
  useEffect(() => {
    document.title = "Abhijit Rao - Experience";
  });
  return (
    <Box>
      <MarkdownComponent title="Experience" markdownContent={ExperienceDoc} />
      <MarkdownComponent title="Education" markdownContent={EducationDoc} />
      <MarkdownComponent
        title="Accomplishments"
        markdownContent={AccomplishmentsDoc}
      />
    </Box>
  );
}
