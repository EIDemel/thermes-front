"use client";
 
import { useEffect, useState } from "react";
 
const navItemStyle = {
  textDecoration: "none",
  color: "white",
  background: "#485F63",
  padding: "0.5rem 1.1rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-block",
  whiteSpace: "nowrap" as const,
};
 
export default function Header() {
  const [navSticky, setNavSticky] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setNavSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: navSticky ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: navSticky ? "blur(8px)" : "none",
        borderBottom: navSticky ? "1px solid rgba(0,0,0,0.08)" : "none",
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
        boxShadow: navSticky ? "0 2px 20px rgba(0,0,0,0.1)" : "none",
        opacity: navSticky ? 1 : 0,
        pointerEvents: navSticky ? "auto" : "none",
        transform: navSticky ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <img
        src="/images/logo-thermes-noir.png"
        alt="Les Thermes"
        style={{ height: "40px", width: "auto" }}
      />
 
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>

        <a href="/nos-numeros" style={{ ...navItemStyle, display: "block", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              Tous les numéros
        </a>
        <a href="/nos-points-de-vente" style={navItemStyle}>Nos points de vente</a>
        <a href="/actualites" style={navItemStyle}>Actualités</a>
        <a href="/a-propos" style={navItemStyle}>À propos</a>
 
      </div>
    </nav>
  );
}