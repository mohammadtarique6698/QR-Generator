import React from "react";

const footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexShrink: "1",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        position: "sticky",
        top: "100%",
        marginTop: "3rem",
        width: "calc(100%)",
        background: "black",
        color: "white",
      }}
    >
      <h3>Developed By Mohammad Tarique</h3>
      <h3>Assignment for Mishal Technologies</h3>
    </div>
  );
};

export default footer;
