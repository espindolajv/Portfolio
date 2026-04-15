'use client'

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setVisible(true), 1500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
