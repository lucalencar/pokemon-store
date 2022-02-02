import React, { useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";
import styled from "styled-components";

const StyledScrollArrow = styled(HiArrowCircleUp)`
  color: lightgrey;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 40px;
  z-index: 2;
  cursor: pointer;
  transition: all ease-in 0.1s;
  &:hover {
    color: rgb(var(--primary));
  }
`;

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <StyledScrollArrow
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    />
  );
};

export default ScrollArrow;
