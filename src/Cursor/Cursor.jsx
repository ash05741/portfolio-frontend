import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const moveMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    const animate = () => {
      // smooth follow (LERP)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        // Using -50% to perfectly center it regardless of its current width/height
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", moveMouse);
  }, []);

  // Detect hover on clickable elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, input, textarea, svg")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, input, textarea, svg")) {
        setHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out rounded-none
        ${hovering
          ? "w-10 h-10 bg-transparent border-4 border-[#1A1A1A] shadow-[4px_4px_0_0_#EA580C]"
          : "w-4 h-4 bg-[#1A1A1A]"
        }
      `}
    />
  );
}