import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";

const getContents = () => [
  {
    display: "Home",
    icon: HomeIcon,
    content: () => "Home"
  },
  {
    display: "Projects",
    icon: ComputerIcon,
    content: () => "Projects"
  },
  {
    display: "Resume",
    icon: DescriptionIcon,
    content: () => "Resume"
  },
  {
    display: "Contact",
    icon: InfoIcon,
    content: () => "Contact"
  }
];

export default getContents;
