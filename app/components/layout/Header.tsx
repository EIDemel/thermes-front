"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Thermes" },
  { href: "/nos-numeros", label: "Numéros" },
  { href: "/nos-points-de-vente", label: "Points de vente" },
  { href: "/actualites", label: "Actualités" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const ACTIVE_COLORS: Record<string, string> = {
  "/": "#E8006E",
  "/nos-numeros": "#F26522",
  "/nos-points-de-vente": "#E8006E",
  "/actualites": "#F26522",
  "/a-propos": "#E8006E",
  "/contact": "#F26522",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <style>{`
        .header-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
        }

        .nav-links {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        .nav-link {
          text-decoration: none;
          color: white;
          background: #485F63;
          padding: 0.5rem 1.1rem;
          font-size: 0.9rem;
          font-weight: 600;
          white-space: nowrap;
          transition: background 0.2s ease;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: #485F63;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: white;
          transition: all 0.25s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 99;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          padding-top: 72px;
          padding-bottom: 1.5rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.12);
          transform: translateY(-100%);
          transition: transform 0.3s ease;
        }
        .mobile-menu.open {
          transform: translateY(0);
        }
        .mobile-menu a {
          display: block;
          text-decoration: none;
          color: #1a1a1a;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.9rem 2rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background 0.15s ease, color 0.15s ease;
        }
        .mobile-menu a:hover {
          background: rgba(0,0,0,0.04);
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: block; }
        }
      `}</style>

      <nav className="header-nav">
        <a href="/" style={{ display: "inline-block", lineHeight: 0 }}>
          <img
            src="/images/logo-thermes-noir.png"
            alt="Les Thermes"
            style={{ height: "40px", width: "auto" }}
          />
        </a>

        <div className="nav-links">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <a
                key={href}
                href={href}
                className="nav-link"
                style={isActive ? { background: ACTIVE_COLORS[href] ?? "#F26522" } : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <a
              key={href}
              href={href}
              style={isActive ? { color: ACTIVE_COLORS[href] ?? "#F26522", background: `${ACTIVE_COLORS[href]}18` } : undefined}
            >
              {label}
            </a>
          );
        })}
      </div>
    </>
  );
}