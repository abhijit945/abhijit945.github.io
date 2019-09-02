import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import DescriptionIcon from "@material-ui/icons/Description";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";

const getContents = () => [
  {
    display: "Home",
    route: "/",
    icon: HomeIcon,
    content: () => HomePage
  },
  {
    display: "Resume",
    route: "/resume",
    icon: DescriptionIcon,
    content: () => ResumePage
  },
  {
    display: "Projects",
    route: "/projects",
    icon: ComputerIcon,
    content: () => ProjectPage
  }
];

export default getContents;
