import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const vwToPixel = value => `${(window.innerWidth * value) / 100}px`;
const vhToPixel = value => `${(window.innerHeight * value) / 100}px`;

const Card = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [props, set] = useSpring(() => ({
    // top: 0,
    // position: "relative",
    // left: 0,
    width: "80px",
    height: "80px",
    // borderRadius: 16,
    margin: 8
  }));
  const onClick = () => {
    set({
      width: !isOpen ? vwToPixel(100) : "80px",
      height: !isOpen ? vhToPixel(100) : "80px",
      margin: !isOpen ? -20 : 8,
      borderRadius: !isOpen ? 0 : 16
      // position: !isOpen ? "absolute" : "relative"
    });
    setIsOpen(!isOpen);
  };
  return (
    <animated.div className={className} style={props} onClick={onClick}>
      cards
    </animated.div>
  );
};

const StyledCard = styled(Card)`
  border: 1px solid blue;
  cursor: pointer;
  border-radius: 16px;
  padding: 16px;
  width: 80px;
  height: 80px;
  box-shadow: 0px 2px 3px rgba(0, 0, 124, 0.15);
`;

const ClickReveal = ({ className }) => {
  const icons = Array.from({ length: 2 }, (v, i) => i);
  return (
    <div className={className}>
      {icons.map(v => (
        <StyledCard key={v} />
      ))}
    </div>
  );
};

const StyledClickReveal = styled(ClickReveal)`
  width: 100%;
  border: 1px solid red;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100vh;
`;

export default StyledClickReveal;
