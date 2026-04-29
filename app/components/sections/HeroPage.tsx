"use client";
 
import { useRef } from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
 
export default function HeroPage({ posts }: { posts: any[] }) {
  const heroRef = useRef<HTMLDivElement>(null);
 
  return (
    <>
      <Header />
 
      {/* HERO */}
      <div
        ref={heroRef}
        style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}
      >
        <img
          src="/images/hero.jpg"
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
 
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4))" }} />
 
        <div style={{ position: "absolute", top: "20%", left: 0, right: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div style={{ alignSelf: "center", background: "#E8006E", padding: "0.6rem 1.2rem", maxWidth: "60%" }}>
            <p style={{ margin: 0, color: "#FF6EB4", fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
              Lac noir, barque noire, deux silhouettes de papier découpé, noires.<br />
              Jusqu'où s'étendent les arbres noirs qui s'abreuvent ici ?
            </p>
          </div>
 
          <div style={{ alignSelf: "center", background: "#F26522", padding: "0.6rem 1.2rem", maxWidth: "55%" }}>
            <p style={{ margin: 0, color: "#FFB499", fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)", fontWeight: 700, textAlign: "center", lineHeight: 1.4 }}>
              Black lake, black boat, two black, cut-paper people.<br />
              Where do the black trees go that drink here ?
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
        <div style={{ display: "flex", height: "500px", width: "100%" }}>
          {posts.slice(0, 5).map((post: any, index: number) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            return (
              <div
                key={post.id}
                style={{ flex: 1, overflow: "hidden", position: "relative", transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)", cursor: "pointer" }}
                onMouseEnter={e => {
                  const parent = e.currentTarget.parentElement;
                  if (!parent) return;
                  Array.from(parent.children).forEach((child, i) => {
                    (child as HTMLElement).style.flex = i === index ? "3" : "0.5";
                  });
                }}
                onMouseLeave={e => {
                  const parent = e.currentTarget.parentElement;
                  if (!parent) return;
                  Array.from(parent.children).forEach(child => {
                    (child as HTMLElement).style.flex = "1";
                  });
                }}
              >
                {image ? (
                  <img src={image} alt={post.title.rendered} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div style={{ position: "absolute", inset: 0, background: `hsl(${index * 40}, 40%, 30%)` }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1rem", right: "1rem", color: "white" }}>
                  <p style={{ margin: 0, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, marginBottom: "0.4rem" }}>
                    Article {index + 1}
                  </p>
                  <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} style={{ margin: 0, fontSize: "1rem", fontWeight: 700, lineHeight: 1.3 }} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
 
      <Footer />
    </>
  );
}