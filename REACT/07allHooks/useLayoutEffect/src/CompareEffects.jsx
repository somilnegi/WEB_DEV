import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

// Box using useEffect
function BoxEffect() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    function updateWidth() {
      setWidth(0); // force wrong value first
      requestAnimationFrame(() => {
        if (boxRef.current) {
          setWidth(boxRef.current.getBoundingClientRect().width);
        }
      });
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Using useEffect</h2>
      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: "80px",
          background: "lightcoral",
        }}
      />
      <p>Measured width: {width}px</p>
    </div>
  );
}

// Box using useLayoutEffect
function BoxLayoutEffect() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    function updateWidth() {
      if (boxRef.current) {
        setWidth(boxRef.current.getBoundingClientRect().width);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-bold mb-2">Using useLayoutEffect</h2>
      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: "80px",
          background: "lightseagreen",
        }}
      />
      <p>Measured width: {width}px</p>
    </div>
  );
}

export default function CompareEffects() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">useEffect vs useLayoutEffect</h1>
      <BoxEffect />
      <BoxLayoutEffect />
    </div>
  );
}
