import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const RawMoveableBox = ({ className, displacement, screen }) => {
  const [props, set] = useSpring(() => ({ x: displacement }));
  useEffect(() => {
    set({ x: displacement });
  }, [set, displacement]);
  return (
    <animated.div
      className={className}
      style={{
        transform: props.x.to(x => `translateX(${x}%)`)
      }}
    >
      Screen {screen}
    </animated.div>
  );
};

const MoveableBox = styled(RawMoveableBox)`
  background-color: teal;
  min-height: 100vh;
  &:nth-of-type(2) {
    background-color: orange;
  }
  &:nth-of-type(3) {
    background-color: purple;
  }
  min-width: 100%;
  /* border: 1px solid red; */
  padding: 30px;
  /* min-height: 100vh; */
`;

function App({ className }) {
  const [displacement, setDisplacement] = useState(0);
  const screens = [1, 2, 3, 4];
  const max = (screens.length - 1) * -100;
  const min = 0;
  const moveRight = () => {
    console.log(">>", displacement, max, displacement > max);
    if (displacement > max) {
      const mv = displacement - 100;
      setDisplacement(mv);
    }
  };
  const moveLeft = () => {
    if (displacement !== min) {
      const mv = displacement + 100;
      setDisplacement(mv);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        // border: "1px solid red",
        maxWidth: "100%",
        overflowX: "hidden"
      }}
      className={`App ${className}`}
    >
      <button onClick={moveLeft}>{"<"}</button>
      <button onClick={moveRight}>{">"}</button>
      {screens.map(screen => (
        <MoveableBox key={screen} displacement={displacement} screen={screen} />
      ))}
    </div>
  );
}

const StyledApp = styled(App)`
  position: relative;
  z-index: 1;
  button {
    position: absolute;
    z-index: 2;
    width: 40px;
    top: calc(50% - 20px);
    background-color: #333;
    border: none;
    color: white;
    height: 40px;
    &:first-of-type {
      left: 0px;
    }
    &:last-of-type {
      left: calc(100% - 40px);
    }
  }
`;

export default StyledApp;
