import React from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`,
    children: (
      <>
        {children.props.children}
        <div className="tooltip-box">{text}</div>
      </>
    )
  });
};

export default Tooltip;
