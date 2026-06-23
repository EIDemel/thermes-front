import Link from "next/link";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

async function getActualites() {
  const res = await fetch(
    "https://cms.revuethermes.fr/wp-json/wp/v2/posts?categories=5&_embed",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Actualites() {
  const actualites = await getActualites();

  return (
    <>
      <Header />

      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/actualites.jpeg"
          alt="Actualités"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ margin: 20, backgroundColor: "#F26522", color: "#FFB499", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, textAlign: "center", padding: "0.5rem 1rem" }}>
            ACTUALITÉS
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
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
        }}>
            {actualites.map((post: any, i: number) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const date = new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric", month: "long", year: "numeric"
            });

            return (
                <Link href={`/actualites/${post.slug}`} key={post.id} style={{ textDecoration: "none" }}>
                <article className="actu-card">

                    {/* Image */}
                    <div className="actu-img-wrap">
                    {image
                        ? <img src={image} alt="" className="actu-img" />
                        : <div className="actu-img-placeholder" />
                    }
                    <div className="actu-img-overlay" />
                    </div>

                    {/* Texte */}
                    <div className="actu-body">
                    <span className="actu-date">{date}</span>
                    <h2
                        className="actu-title"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <span className="actu-cta">Lire →</span>
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

        .actualite-card:hover .actualite-bg {
          filter: blur(3px);
          transform: scale(1.05);
        }

        .actualite-card:hover .actualite-overlay {
          opacity: 1;
        }

        .actualite-card:hover .actualite-icon {
          background: rgba(255,255,255,0.35);
          transform: scale(1.15);
        }

        .actu-card {
            display: flex;
            flex-direction: column;
            background: #fff;
            border: 1px solid #e4e0d8;
            transition: box-shadow 0.2s ease, transform 0.2s ease;
            height: 100%;
            }
            .actu-card:hover {
            box-shadow: 0 8px 32px rgba(72, 95, 99, 0.13);
            transform: translateY(-3px);
            }

            .actu-img-wrap {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 9;
            overflow: hidden;
            background: #485F63;
            }
            .actu-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
            }
            .actu-card:hover .actu-img {
            transform: scale(1.04);
            }
            .actu-img-placeholder {
            width: 100%; height: 100%;
            background: #485F63;
            }
            .actu-img-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.08));
            }

            .actu-body {
            padding: 1.2rem 1.4rem 1.4rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex: 1;
            }
            .actu-date {
            font-size: 0.7rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #F26522;
            font-weight: 600;
            }
            .actu-title {
            margin: 0;
            font-size: 1.05rem;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.4;
            }
            .actu-cta {
            margin-top: auto;
            padding-top: 0.8rem;
            font-size: 0.8rem;
            font-weight: 600;
            color: #485F63;
            letter-spacing: 0.05em;
            border-top: 1px solid #e4e0d8;
            }
            .actu-card:hover .actu-cta {
            color: #F26522;
            }
      `}</style>
    </>
  );
}