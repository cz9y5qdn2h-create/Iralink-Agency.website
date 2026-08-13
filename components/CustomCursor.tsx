"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        dotRef.current.style.opacity = "1";
      }
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "5px",
        height: "5px",
        background: "var(--gold)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        opacity: 0,
        left: "-100px",
        top: "-100px",
      }}
    />
  );
}
