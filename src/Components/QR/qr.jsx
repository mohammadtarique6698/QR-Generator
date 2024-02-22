import React from "react";
import QRCode from "qrcode.react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const QR = () => {
  const [inVoice, setInvoice] = useState("");
  const [amount, setAmount] = useState("");
  const [displayQR, setDisplayQR] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const functionForQRCodeGenerate = () => {
    const trimmedInvoice = inVoice.trim();
    const trimmedAmount = amount.trim();

    if (!trimmedInvoice || !trimmedAmount) {
      return "";
    }

    const qrCode = `ST10|${trimmedInvoice}|${trimmedAmount}`;
    //console.log("Generated QR Code:", qrCode);
    return qrCode;
  };

  const handleClick = () => {
    if (!inVoice && !amount) {
      setErrorMessage("Enter all fields to generate QR :)");
      return;
    }
    if (!inVoice) {
      setErrorMessage("Enter Invoice Number to generate QR :)");
      return;
    }
    if (!amount) {
      setErrorMessage("Enter Amount to generate QR :)");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    //for loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    //for showing the QR code after loading spinner disappears
    setTimeout(() => {
      setDisplayQR(true);
    }, 2100);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>E-Invoicing QR Code Generator</h1>
      <label>
        <span style={{ fontWeight: "600" }}>Invoice Number</span> :{" "}
        <input
          type="text"
          placeholder="Enter Invoice Number"
          value={inVoice}
          onChange={(e) => {
            setInvoice(e.target.value);
            if (e.target.value.trim() !== "" && errorMessage) {
              setErrorMessage("");
            }
          }}
          required
          style={{ padding: "1rem", borderRadius: "2rem" }}
        />
      </label>
      <label style={{ marginTop: "2rem" }}>
        <span style={{ fontWeight: "600" }}>Amount</span> :{" "}
        <input
          type="text"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            if (errorMessage) {
              setErrorMessage("");
            }
          }}
          required
          style={{ padding: "1rem", borderRadius: "2rem" }}
        />
      </label>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        style={{
          height: "3.5rem",
          width: "5rem",
          padding: "0.2rem",
          border: "2px solid black",
          textAlign: "center",
          borderRadius: "1rem",
          background: "lightGreen",
          fontWeight: "700",
          marginTop: "2rem",
          cursor: "pointer",
        }}
        onClick={() => handleClick()}
      >
        Generate
      </button>
      <div style={{ marginTop: "2rem" }}>
        {Loading ? (
          <ClipLoader
            color="red"
            loading={Loading}
            size={20}
            aria-label="Loading Spinner"
          />
        ) : null}
      </div>
      <div>
        {displayQR && (
          <QRCode
            value={functionForQRCodeGenerate()}
            size={256}
            level={"H"}
            includeMargin={true}
          />
        )}
      </div>
    </div>
  );
};

export default QR;
