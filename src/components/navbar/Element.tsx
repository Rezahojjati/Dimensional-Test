import React from "react";

type CircleProps = {
  color: string;
};

function Element(props: CircleProps) {
  return (
    <div style={{ backgroundColor: `${props.color}` }} className="circle"></div>
  );
}

export default Element;
