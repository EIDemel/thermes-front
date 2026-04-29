"use client";

import { useState, useRef, useEffect } from "react";

type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const members: Member[] = [
  {
    name: "Diane Perroux",
    role: "",
    image: "/images/trombinoscope/DIANE.jpeg",
    bio: "Moi c’est Diane, 21 ans, je suis co-rédactrice en cheffe de Thermes. J'aime le montage et le bricolage, écrire sur le cinéma et quelquefois pour des films, je m’éparpille le jour puis je dors beaucoup la nuit. Plus tard je ferai des expérimentations en résine, je reprendrai la danse, je me couperai les cheveux courts et j’apprendrai la guitare, mais pour le moment je travaille sur mon film de master en écoutant PJ Harvey, et ça me ravit.",
  },
  {
    name: "Nina Gayet",
    role: "",
    image: "/images/trombinoscope/NINA.jpeg",
    bio: "Yo moi c’est Nina, j’ai 22 ans, toutes mes dents mais plus de sourcils depuis septembre (j’en ai fait un trait de personnalité). Je suis au comité de rédaction et éditrice en cheffe de Thermes! à côté je travaille sur Youssef Chahine en master d’histoire du ciné, je suis surveillante, je bosse chez Paradoxe (qui produit Thermes) et j’écris un peu de tout. quand je suis pas au café ou au ciné je fais des playlists (c’est chronophage mais merveilleux) et j’adore ça.",
  },
  {
    name: "Sacha Festy",
    role: "",
    image: "/images/trombinoscope/SACHA.jpeg",
    bio: "Je suis étudiant en littérature comparée, maraîcher le jour, fan absolu de Die Hard et de Stévenin la nuit, amateur de poésies, documentaires, et de tout type d’expérimentations intermédiales le jour. Un gros curieux finalement.",
  },
//   {
//     name: "SIMON",
//     role: "Rédacteur en chef adjoint",
//     image: "/images/trombinoscope/SIMON.jpg",
//     bio: "Simon épargne les fautes, déniche les contradictions et garde le cap éditorial quand tout part dans tous les sens.",
//   },
//   {
//     name: "OSCAR",
//     role: "Graphiste",
//     image: "/images/trombinoscope/OSCAR.jpg",
//     bio: "Oscar construit l'identité visuelle de Thermes — typographies, grilles, couleurs — et donne à la revue sa silhouette reconnaissable.",
//   },
];

const CARD_SIZE = 300; // width & default height (square)

function MemberCard({ member }: { member: Member }) {
  const [isActive, setIsActive] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  // Measure the panel's natural height once mounted
  useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.scrollHeight);
    }
  }, []);

  const totalHeight = isActive ? CARD_SIZE + panelHeight : CARD_SIZE;

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      style={{
        position: "relative",
        width: `${CARD_SIZE}px`,
        height: `${totalHeight}px`,
        overflow: "hidden",
        cursor: "pointer",
        flexShrink: 0,
        transition: "height 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease",
        boxShadow: isActive
          ? "0 10px 32px rgba(0,0,0,0.22)"
          : "none",
        // no border-radius by default — stays square
      }}
    >
      {/* ── Photo — always top CARD_SIZE px ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${CARD_SIZE}px`,
          height: `${CARD_SIZE}px`,
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.45s ease",
            transform: isActive ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.15)",
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      {/* ── Info panel — natural height, revealed below ── */}
      <div
        ref={panelRef}
        style={{
          position: "absolute",
          top: `${CARD_SIZE}px`,
          left: 0,
          width: `${CARD_SIZE}px`,
          background: "#485F63",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.85rem 0.9rem",
          gap: "0.4rem",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.2s ease " + (isActive ? "0.2s" : "0s"),
          // let the content define the height naturally
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.1em",
            color: "#fff",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </span>

        <div
          style={{
            width: "28px",
            height: "1px",
            background: "rgba(255,255,255,0.35)",
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            lineHeight: 1.4,
          }}
        >
          {member.role}
        </span>

        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            lineHeight: 1.55,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}

export default function Trombinoscope() {
  const rows =
    members.length <= 3
      ? [members]
      : [members.slice(0, 3), members.slice(3)];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "3rem auto",
        padding: "0 1rem",
      }}
    >
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
            marginBottom: rowIdx < rows.length - 1 ? "2.5rem" : 0,
            alignItems: "flex-start",
          }}
        >
          {row.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      ))}
    </div>
  );
}