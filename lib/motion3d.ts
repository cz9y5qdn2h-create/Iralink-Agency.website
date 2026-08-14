// Reusable pointer-driven 3D micro-interactions: magnetic buttons and tilt cards.
// Pure DOM-style mutations on currentTarget — no React state, safe to spread onto any element.
import type { MouseEvent } from "react";

export function magnetMove(e: MouseEvent<HTMLElement>) {
  const t = e.currentTarget;
  const r = t.getBoundingClientRect();
  const x = (e.clientX - r.left - r.width / 2) * 0.25;
  const y = (e.clientY - r.top - r.height / 2) * 0.35;
  t.style.transform = `translate(${x}px,${y}px)`;
}

export function magnetLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "translate(0,0)";
}

export function tiltMove(e: MouseEvent<HTMLElement>) {
  const t = e.currentTarget;
  const r = t.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  t.style.transform = `translateY(-2px) rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
}

export function tiltLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "translateY(0) rotateX(0deg) rotateY(0deg)";
}

// Deeper tilt + a moving specular highlight — used for the "hero-grade" feature cards.
export function deepTiltMove(e: MouseEvent<HTMLElement>) {
  const t = e.currentTarget;
  const r = t.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  const x = px - 0.5;
  const y = py - 0.5;
  t.style.transform = `perspective(900px) translateY(-4px) rotateX(${(-y * 12).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) scale3d(1.015,1.015,1.015)`;
  const glow = t.querySelector<HTMLElement>("[data-tilt-glow]");
  if (glow) glow.style.background = `radial-gradient(280px circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(156,138,104,0.22), transparent 70%)`;
}

export function deepTiltLeave(e: MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "perspective(900px) translateY(0) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  const glow = e.currentTarget.querySelector<HTMLElement>("[data-tilt-glow]");
  if (glow) glow.style.background = "transparent";
}
