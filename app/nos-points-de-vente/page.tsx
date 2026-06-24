import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StoreMap from "../components/StoreMap";
import { NTR } from "next/font/google";

export default async function NosPointsDeVente() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/nos_points_de_vente.png"
          alt="Nos points de vente"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />

        <div style={{  position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ margin: 20, backgroundColor: "#485F63", color: "#b2babb", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, textAlign: "center", padding: "0.5rem 1rem" }}>
            NOS POINTS DE VENTE
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

        <p style={{ marginTop: "1rem", fontSize: "1.6rem", color: "#485F63", textAlign: "center" }}>
           Nous travaillons à rendre Thermes disponible au plus près de chez vous. <br />Vous pouvez d’ores et déjà vous procurer la revue dans les points de vente ci-dessous.
        </p>

        {/* CARTE INTERACTIVE — Client Component */}
        <StoreMap />
        {/* texte explicatif que c'est que pour les parisiens  */}
        <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#485F63", textAlign: "center" }}>
          Ami.es parisien.nes, vous pouvez également commander la revue ci-dessous et un membre de l'équipe viendra vous l'apporter au lieu de votre choix ! Pour des raisons de transports, ce service est disponible <b>uniquement à Paris</b>.
        </p>


        
        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
          <a href="helloasso" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "#E8006E",
            color: "#fff",
            padding: "0.75rem 1.8rem",
            fontWeight: 500,
            textDecoration: "none",
          }}>
            Se faire livrer
          </a>
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
        .numero-card:hover .numero-overlay { opacity: 1; }
        .numero-card:hover .numero-icon {
          background: rgba(255,255,255,0.35);
          transform: scale(1.15);
        }
      `}</style>
    </>
  );
}