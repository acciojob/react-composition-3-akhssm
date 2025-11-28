import React, { useState } from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        {show && <div>{text}</div>}  
      </>
    )
  });
};

export default Tooltip;
