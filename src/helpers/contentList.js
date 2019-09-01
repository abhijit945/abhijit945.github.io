import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";

const getContents = () => [
  {
    display: "Home",
    icon: HomeIcon,
    content: () => HomePage
  },
  {
    display: "Projects",
    icon: ComputerIcon,
    content: () => ProjectPage
  },
  {
    display: "Resume",
    icon: DescriptionIcon,
    content: () => ResumePage
  },
  {
    display: "Contact",
    icon: InfoIcon,
    content: () => ContactPage
  }
];

export default getContents;
