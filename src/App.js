import React, { useContext } from "react";
import "./styles.css";

import QuoteContainer from "./components/QuoteContainer";
import { ColorContext } from "./contexts/ColorContext";

export default function App() {
  const { color } = useContext(ColorContext);
  return (
    <div className="app" style={{ backgroundColor: color }}>
      <QuoteContainer />
    </div>
  );
}
