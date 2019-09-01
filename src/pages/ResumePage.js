import React from "react";
import Box from "@material-ui/core/Box";
import Experience from "../components/Resume/Experience";
import Education from "../components/Resume/Education";
import References from "../components/Resume/References";
import Skills from "../components/Resume/Skills";
import Accomplishments from "../components/Resume/Accomplishments";

export default function ResumePage() {
  return (
    <Box p={3}>
      <Experience />
      <Accomplishments />
      <Education />
      <References />
      <Skills />
    </Box>
  );
}
