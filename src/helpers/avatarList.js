import React from "react";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "../components/GitHubIcon";
import LinkedInIcon from "../components/LinkedInIcon";

const getAvatarList = () => [
  {
    icon: <AlternateEmailIcon />,
    link: "mailto:abhijit945@gmail.com",
    label: "abhijit945@gmail.com"
  },
  {
    icon: <LanguageIcon />,
    link: "https://abhijit945.github.io",
    label: "https://abhijit945.github.io"
  },
  {
    icon: <GitHubIcon />,
    link: "https://github.com/abhijit945",
    label: "https://github.com/abhijit945"
  },
  {
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/raoabhijit",
    label: "https://www.linkedin.com/in/raoabhijit"
  }
];

export default getAvatarList;
