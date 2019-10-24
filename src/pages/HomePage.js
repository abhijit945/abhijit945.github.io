import React, { useEffect } from "react";
import AboutDoc from "./docs/About.md";
import MarkdownComponent from "../components/MarkdownComponent";

export default function HomePage() {
  useEffect(() => {
    document.title = "Abhijit Rao \u2022 Home";
  });
  return <MarkdownComponent title="About me" markdownContent={AboutDoc} />;
}
