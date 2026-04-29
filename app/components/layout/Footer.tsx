"use client";

import { useRef } from "react";

export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <footer style={{ background: "#485F63", color: "white", fontFamily: "'Oswald', sans-serif" }}>

      {/* SECTION PRINCIPALE */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        alignItems: "center",
        padding: "2rem 3rem",
        gap: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
      }}>


        
      </div>

      {/* MARQUEE */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          overflow: "hidden",
          padding: "1rem 0",
        }}
        onMouseEnter={() => {
          if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running";
        }}
      >
        <div
          ref={marqueeRef}
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 18s linear infinite",
            fontSize: "1.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ marginRight: "2rem" }}>ABONNEZ-VOUS &lt;3</span>
          ))}
        </div>
      </div>

      {/* RÉSEAUX + LIENS */}
      <div style={{ textAlign: "center", padding: "2rem 1rem" }}>

        {/* Icônes réseaux */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          {[
        {
            label: "Instagram",
            href: "https://www.instagram.com/revuethermes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z"
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/thermes-revue/?viewAsMember=true",
            path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z"
        }   
        ].map(({ label, href, path }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1.5px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d={path} />
                </svg>
            </a>
            ))}
        </div>

        {/* Liens bas */}
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", fontSize: "0.75rem", letterSpacing: "0.1em", opacity: 0.6 }}>
          {["OÙ NOUS TROUVER ?", "MENTIONS LÉGALES", "CONTACT"].map(link => (
            <a key={link} href="#" style={{ color: "white", textDecoration: "none" }}>{link}</a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}