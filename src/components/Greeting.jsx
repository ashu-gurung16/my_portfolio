import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function Greeting() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((index) => index + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="greeting_container">
      <div className="bg"></div>

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <h1 id="greetings_header">
        <TextTransition springConfig={presets.slow}>
          {greetings[textIndex % greetings.length]}
        </TextTransition>
      </h1>
    </div>
  );
}

const greetings = ["", "Hello", "Namaste", "Hola", "Konnichiwa", "👋🏻"];
