"use client";

import { useState } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function HeroPage({ posts }: { posts: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const CATEGORY_ROUTES: Record<number, string> = {
    6: "/nos-numeros",
    5: "/actualites",
  };

  function getPostUrl(post: any): string {
    const categoryId = post.categories?.[0];
    const base = CATEGORY_ROUTES[categoryId] ?? "/actualites";
    return `${base}/${post.slug}`;
  }

  return (
    <>
      <Header />

      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", marginTop: "72px" }}>
        <img
          src="/images/hero.jpg"
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))" }} />

        <div style={{ position: "absolute", top: "20%", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{ alignSelf: "center", background: "#E8006E", padding: "0.6rem 1.2rem", maxWidth: "60%" }}>
            <p style={{ margin: 0, color: "#FFB8DA", fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
              Lac noir, barque noire, deux silhouettes de papier découpé, noires.<br />
              Jusqu'où s'étendent les arbres noirs qui s'abreuvent ici ? <sup>1</sup>
              
            </p>
          </div>

          <div style={{ alignSelf: "center", background: "#F26522", padding: "0.6rem 1.2rem", maxWidth: "55%" }}>
            <p style={{ margin: 0, color: "#FFB499", fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
              Black lake, black boat, two black, cut-paper people.<br />
              Where do the black trees go that drink here ? <sup>2</sup>
            </p>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { overflow-x: hidden; }
        `}</style>
      </div>

      {/* CARROUSEL */}
      <main style={{ maxWidth: "100%", overflow: "hidden" }}>
        <div style={{ padding: "10px clamp(1rem, 10vw, 250px)", fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", display: "flex", height: "auto", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#E8006E", color: "#FFB8DA", textAlign: "center" }}>
          Thermes est une revue de cinéma pensée par toutes et tous, pour toutes et tous. Imaginé à partir d’un vers de poésie, chaque numéro juxtapose les arts et les visions, encourage la création autour des films. Nous sommes perpétuellement à la recherche de nouveaux.elles contributeur.ices, pour proposer toutes formes de création autour du cinéma.<br />
        </div>
        <div style={{  padding:"10px 10px 0px 10px", margin: 0, fontSize: "clamp(0.6rem, 1vw, 0.95rem)", display: "flex", height: "auto", width: "100%", justifyContent: "left", alignItems: "left", backgroundColor: "#F26522", color: "#FFB499", textAlign: "left" }}>
          <sup>1</sup> Arbres d'Hiver précédé de La Traversée, Sylvia Plath, traduction par Françoise Morvan et Valérie Rousseau édition Gallimard, 1999.   
        </div>
        <div style={{ padding:"0px 10px 10px 10px", margin: 0, fontSize: "clamp(0.6rem, 1vw, 0.95rem)", display: "flex", height: "auto", width: "100%", justifyContent: "left", alignItems: "left", backgroundColor: "#F26522", color: "#FFB499", textAlign: "left" }}>
          <sup>2</sup> Crossing Waters, Sylvia Plath, édition Faber and Faber Limited, 1971.  <br />
        </div>
        <div style={{ display: "flex", height: "500px", width: "100%" }}>
          {posts.slice(0, 5).map((post: any, index: number) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const isHovered = hoveredIndex === index;
            const flex = hoveredIndex === null ? 1 : isHovered ? 3 : 0.5;

            return (
              <a
                href={getPostUrl(post)}
                key={post.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  flex,
                  overflow: "hidden",
                  position: "relative",
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                {image ? (
                  <img
                    src={image}
                    alt={post.title.rendered}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <div style={{ position: "absolute", inset: 0, background: `hsl(${index * 40}, 40%, 30%)` }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1rem", right: "1rem", color: "white" }}>
                  <h2
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    style={{ margin: 0, fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}