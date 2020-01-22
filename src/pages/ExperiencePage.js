import Box from "@material-ui/core/Box";
import React, { useEffect } from "react";
import EducationDoc from "../components/docs/Education.md";
import ExperienceDoc from "../components/docs/Experience.md";
import MarkdownComponent from "../components/MarkdownComponent";

export default function ExperiencePage() {
  useEffect(() => {
    document.title = "Abhijit Rao \u2022 Experience";
  });
  return (
    <Box>
      <MarkdownComponent title="Experience" markdownContent={ExperienceDoc} />
      <MarkdownComponent title="Education" markdownContent={EducationDoc} />
    </Box>
  );
}
