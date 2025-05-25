import "./App.css";
import { useState } from "react";
import { Roulette } from "react-fortune-roulette";
import highlightImg from "./assets/highlight.png";
import pointerImg from "./assets/pointer.png";
import wheelImageBaseImg from "./assets/wheel_image_base.png";
import wheelImageOverlayImg from "./assets/wheel_image_overlay.png";

function App() {
  const [giftCode, setGiftCode] = useState<string | null>(null);

  const onReceiveGift = (code: string) => {
    setGiftCode(code);
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: 20 }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 10 }}>
        🎡 React Fortune Roulette
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: 30 }}>
        Modern, animated roulette component for React with Framer Motion.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginBottom: 40,
        }}
      >
        <a
          href="https://github.com/dmitriy-morozov/react-fortune-roulette"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#333",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/react-fortune-roulette"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "#cb3837",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          View on npm
        </a>
      </div>

      <div style={{ width: 300, margin: "auto" }}>
        <Roulette
          wheelImageBase={wheelImageBaseImg}
          wheelImageOverlay={wheelImageOverlayImg}
          pointerImage={pointerImg}
          highlightImage={highlightImg}
          prizeList={[
            "Baseball",
            "Rugby",
            "Tennis",
            "Soccer",
            "Badminton",
            "Basketball",
          ]}
          spinsLimit={1}
          duration={5}
          onReceiveGift={onReceiveGift}
          startText="Spin the Wheel!"
          tryAgainText="Try Again!"
          receiveGiftText="Claim your Prize!"
        />
      </div>

      {giftCode && (
        <div style={{ marginTop: 30, fontSize: "1.5rem", fontWeight: 600 }}>
          🎁 You won: <span style={{ color: "#2ecc71" }}>{giftCode}</span>
        </div>
      )}
    </div>
  );
}

export default App;
