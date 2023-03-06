import React, { useEffect, useRef } from "react";
import particleground from "particleground"; // import the particleground library

function ParticleGround({ dotColor, lineColor }) {
  const canvasRef = useRef(null); // create a reference to the canvas element

  useEffect(() => {
    // initialize particleground in a useEffect hook
    const canvas = canvasRef.current;
    const pg = particleground(canvas, { dotColor, lineColor });

    // resize canvas and particles when window size changes
    function handleResize() {
      pg.resize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize(); // call handleResize to set initial size

    // cleanup function to remove event listener and stop animation
    return () => {
      window.removeEventListener("resize", handleResize);
      pg.pause();
    };
  }, [dotColor, lineColor]); // reinitialize when colors change

  return <canvas ref={canvasRef} className="pg-canvas" />;
}