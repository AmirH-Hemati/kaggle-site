import { useEffect, useState } from "react";

function TypeWritetext({ text, speed = 200 }) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((preText) => preText + text[index]);
        console.log(text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="text-2xl font-bold">{displayedText}</p>;
}

export default TypeWritetext;
