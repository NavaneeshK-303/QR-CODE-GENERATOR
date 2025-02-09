import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css"; // External CSS for styling

const App = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(150);
  const [qrVisible, setQrVisible] = useState(false);

  const handleGenerate = () => {
    if (text.trim() !== "") {
      setQrVisible(true);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="container">
      <h2 className="title">QR CODE GENERATOR</h2>

      <input
        type="text"
        placeholder="Data for QR code"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-box"
      />

      <input
        type="number"
        placeholder="Image size (100 - 500)"
        value={size}
        onChange={(e) => {
          const newSize = Number(e.target.value);
          if (newSize >= 100 && newSize <= 500) setSize(newSize);
        }}
        className="input-box"
      />

      <div className="button-container">
        <button onClick={handleGenerate} className="btn generate-btn">
          Generate QR Code
        </button>
        <button onClick={handleDownload} className="btn download-btn">
          Download QR Code
        </button>
      </div>

      {qrVisible && (
        <div className="qr-container">
          <QRCodeCanvas value={text} size={size} />
        </div>
      )}
    </div>
  );
};

export default App;
