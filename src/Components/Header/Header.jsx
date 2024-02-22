import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexShrink: "1",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        width: "calc(100%)",
        background: "black",
        color: "white",
      }}
    >
      <a href="/" style={{ color: "white" }}>
        <h3 style={{ cursor: "pointer", paddingLeft: "1rem" }}>Mishal Tech.</h3>
      </a>
      <h1 style={{ cursor: "pointer", fontSize: "1.5rem" }}>
        QR Code Generator
      </h1>
      <button
        style={{
          height: "3.5rem",
          width: "5rem",
          padding: "0.2rem",
          border: "0.5rem solid black",
          textAlign: "center",
          borderRadius: "1rem",
          background: "lightGreen",
          fontWeight: "700",
          marginRight: "1rem",
        }}
      >
        QR (N.F.)
      </button>
    </div>
  );
};

export default Header;
