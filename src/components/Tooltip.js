import React, { useState } from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  const childWithClass = React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim()
  });

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ display: "inline-block" }}
    >
      {childWithClass}

      {show && <div className="tooltiptext">{text}</div>}
    </div>
  );
};

export default Tooltip;
