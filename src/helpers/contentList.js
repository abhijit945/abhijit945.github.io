import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";

const getContents = () => [
  {
    display: "Home",
    route: "/",
    icon: HomeRoundedIcon,
    content: () => HomePage
  },
  {
    display: "Resume",
    route: "/resume",
    icon: DescriptionRoundedIcon,
    content: () => ResumePage
  },
  {
    display: "Projects",
    route: "/projects",
    icon: ComputerRoundedIcon,
    content: () => ProjectPage
  }
];

export default getContents;
