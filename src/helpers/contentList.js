import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import HomePage from "../pages/HomePage";
import SkillsPage from "../pages/SkillsPage";
import ProjectPage from "../pages/ProjectPage";
import ExperiencePage from "../pages/ExperiencePage";

const getContents = () => [
  {
    display: "Home",
    route: "/",
    icon: HomeRoundedIcon,
    content: () => HomePage
  },
  {
    display: "Experience",
    route: "/experience",
    icon: WorkRoundedIcon,
    content: () => ExperiencePage
  },
  {
    display: "Skills",
    route: "/skills",
    icon: BuildRoundedIcon,
    content: () => SkillsPage
  },
  {
    display: "Projects",
    route: "/projects",
    icon: SchoolRoundedIcon,
    content: () => ProjectPage
  }
];

export default getContents;
