import React from "react";
import "./../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className="tooltip"
    >
      {children}
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
};

export default Tooltip;
