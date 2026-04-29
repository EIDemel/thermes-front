import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

async function getNumeros() {
  const res = await fetch(
    "https://www.leodemeilliers.fr/thermes/wp-json/wp/v2/posts?categories=6&_embed",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function NosNumeros() {
  const numeros = await getNumeros();

  return (
    <>
      <Header />

      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/nos_numeros.jpeg"
          alt="Nos numéros"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, textAlign: "center", margin: 0 }}>
            Nos numéros
          </h1>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* GRILLE */}
      <main style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.5rem",
        }}>
          {numeros.map((post: any) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              console.log("NUMEROS", numeros.map((post: any) => post.title.rendered ));

            return (
              <Link href={`/nos-numeros/${post.slug}`} key={post.id} style={{ textDecoration: "none" }}>
                <article
                  className="numero-card"
                  style={{
                    aspectRatio: "1 / 1.4",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    background: image ? `url(${image}) center/cover no-repeat` : "#485F63",
                  }}
                >
                  {/* image avec blur au hover */}
                  {image && (
                    <div
                      className="numero-bg"
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: image ? `url(${image})` : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "filter 0.3s ease, transform 0.3s ease",
                        zIndex: 0, // ← ajout
                      }}
                    />
                  )}

                  {/* overlay sombre + titre */}
                  <div className="numero-overlay" style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    padding: "1rem",
                    zIndex: 1, // ← ajout
                  }}>
                    <h2
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      style={{
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    />
                  </div>

                  {/* icône coin bas droite */}
                  <div className="numero-icon" style={{
                    position: "absolute",
                    bottom: "0.6rem",
                    right: "0.6rem",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.3s ease, transform 0.3s ease",
                    zIndex: 2,
                  }}>
                    <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>

                </article>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }

        .numero-card:hover .numero-bg {
          filter: blur(3px);
          transform: scale(1.05);
        }

        .numero-card:hover .numero-overlay {
          opacity: 1;
        }

        .numero-card:hover .numero-icon {
          background: rgba(255,255,255,0.35);
          transform: scale(1.15);
        }
      `}</style>
    </>
  );
}