"use client";
 
import { useState, useEffect } from "react";
 
type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
};
 
const members: Member[] = [
  {
    name: "Sacha Festy",
    role: "",
    image: "/images/trombinoscope/PPSACHA.png",
    bio: "Je suis étudiant en littérature comparée, maraîcher le jour, fan absolu de Die Hard et de Stévenin la nuit, amateur de poésies, documentaires, et de tout type d'expérimentations intermédiales le jour. Un gros curieux finalement.",
  },
  {
    name: "Diane Perroux",
    role: "",
    image: "/images/trombinoscope/PPDIANE.png",
    bio: "Moi c'est Diane, 21 ans, je suis co-rédactrice en cheffe de Thermes. J'aime le montage et le bricolage, écrire sur le cinéma et quelquefois pour des films, je m'éparpille le jour puis je dors beaucoup la nuit. Plus tard je ferai des expérimentations en résine, je reprendrai la danse, je me couperai les cheveux courts et j'apprendrai la guitare, mais pour le moment je travaille sur mon film de master en écoutant PJ Harvey, et ça me ravit.",
  },
  {
    name: "Oscar Griveau",
    role: "",
    image: "/images/trombinoscope/PPOSCAR.png",
    bio: "Hello, moi c'est Oscar, j'ai 22 ans, je fais du théâtre, de la scéno surtout, et j'aime beaucoup ça ! Parce que c'est bien dur de se résumer en quelques lignes voici pèle mêles des trucs que j'aime : le vert, les jeux de société, les salopettes, cuisiner, le drag et m'endormir au soleil.",
  },
  {
    name: "Nina Gayet",
    role: "",
    image: "/images/trombinoscope/PPNINA.png",
    bio: "Yo moi c'est Nina, j'ai 22 ans, toutes mes dents mais plus de sourcils depuis septembre (j'en ai fait un trait de personnalité). Je suis au comité de rédaction et éditrice en cheffe de Thermes! à côté je travaille sur Youssef Chahine en master d'histoire du ciné, je suis surveillante, je bosse chez Paradoxe (qui produit Thermes) et j'écris un peu de tout. quand je suis pas au café ou au ciné je fais des playlists (c'est chronophage mais merveilleux) et j'adore ça.",
  },
];
 
const BG_COLORS = ["#E8006E", "#485F63", "#F26522"];
 
function MemberCard({
  member,
  index,
  isMobile,
}: {
  member: Member;
  index: number;
  isMobile: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const bgColor = BG_COLORS[index % BG_COLORS.length];
 
  // On mobile the panel is always visible; on desktop it appears on hover
  const showPanel = isMobile || isHovered;
 
  return (
    <div
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: isMobile ? "default" : "pointer",
        boxShadow: isHovered ? "0 10px 32px rgba(0,0,0,0.22)" : "none",
        transition: "box-shadow 0.3s ease",
        // On mobile take full width; on desktop fixed 260px
        width: isMobile ? "100%" : "260px",
        flexShrink: 0,
      }}
    >
      {/* Photo */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          background: bgColor,
          position: "relative",
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
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* subtle dark overlay on hover (desktop) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.15)",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
      </div>
 
      {/* Info panel — always rendered in the flow, opacity + max-height transition */}
      <div
        style={{
          background: bgColor,
          padding: "0.85rem 0.9rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          // Smooth reveal: max-height trick keeps layout in flow (no overlap)
          maxHeight: showPanel ? "600px" : "0px",
          overflow: "hidden",
          opacity: showPanel ? 1 : 0,
          transition: isMobile
            ? "none"
            : "max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: isMobile ? "1.25rem" : "1rem",
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
 
        {member.role && (
          <span
            style={{
              fontSize: isMobile ? "0.95rem" : "0.75rem",
              color: "rgba(255,255,255,0.65)",
              textAlign: "center",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              lineHeight: 1.4,
            }}
          >
            {member.role}
          </span>
        )}
 
        <p
          style={{
            fontSize: isMobile ? "1rem" : "0.75rem",
            color: "rgba(255,255,255,0.88)",
            textAlign: "center",
            lineHeight: 1.6,
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
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
 
  const rows =
    members.length <= 3
      ? [members]
      : [members.slice(0, 3), members.slice(3)];
 
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "3rem auto",
        padding: "0 1rem",
      }}
    >
      {isMobile ? (
        // Mobile: single column, full width
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {members.map((member, idx) => (
            <MemberCard key={member.name} member={member} index={idx} isMobile={true} />
          ))}
        </div>
      ) : (
        // Desktop: row layout (3 + remainder)
        rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: rowIdx < rows.length - 1 ? "2rem" : 0,
              alignItems: "flex-start",
            }}
          >
            {row.map((member, colIdx) => (
              <MemberCard
                key={member.name}
                member={member}
                index={rowIdx * 3 + colIdx}
                isMobile={false}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
}