import React from "react";

const Toolbox = () => {
  const [tool, toolHandler] = React.useState([]);

  const style = {
    width: 300,
    height: 100 + "vh",
    border: "1px solid #000",
    position: "relative",
    "box-sizing": "border-box"
  };

  return (
    <>
      <div style={style}>{tool}</div>
    </>
  );
};

export default Toolbox;
