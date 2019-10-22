import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import GitHubIcon from "../components/GitHubIcon";
import LinkedInIcon from "../components/LinkedInIcon";

const getAvatarList = () => [
  {
    icon: (
      <Tooltip title="LinkedIn">
        <IconButton color="inherit" aria-label="LinkedIn">
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    ),
    link: "https://www.linkedin.com/in/raoabhijit",
    label: "https://www.linkedin.com/in/raoabhijit"
  },
  {
    icon: (
      <Tooltip title="Email">
        <IconButton color="inherit" aria-label="Email">
          <AlternateEmailRoundedIcon />
        </IconButton>
      </Tooltip>
    ),
    link: "mailto:abhijit945.work@gmail.com",
    label: "abhijit945.work@gmail.com"
  },
  {
    icon: (
      <Tooltip title="GitHub">
        <IconButton color="inherit" aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
      </Tooltip>
    ),
    link: "https://github.com/abhijit945",
    label: "https://github.com/abhijit945"
  },
  {
    icon: (
      <Tooltip title="Website">
        <IconButton color="inherit" aria-label="Website">
          <LanguageRoundedIcon />
        </IconButton>
      </Tooltip>
    ),
    link: "https://abhijit945.github.io",
    label: "https://abhijit945.github.io"
  }
];

export default getAvatarList;
