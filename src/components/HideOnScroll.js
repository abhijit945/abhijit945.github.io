import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import React from "react";

export default function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 250
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <div role="banner">{children}</div>
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};
