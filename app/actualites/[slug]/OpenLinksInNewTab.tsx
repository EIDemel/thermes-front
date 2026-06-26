"use client";
import { useEffect } from "react";

export default function OpenLinksInNewTab() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const links = document.querySelectorAll("main a");
      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}