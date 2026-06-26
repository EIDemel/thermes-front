import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
 
export default async function MentionsLegales() {
  return (
    <>
      <Header />
 
      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/a_propos.jpeg"
          alt="Mentions légales"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />
 
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ margin: 20, backgroundColor: "#E8006E", color: "#FFB8DA", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, textAlign: "center", padding: "0.5rem 1rem" }}>
            MENTIONS LÉGALES
          </h1>
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
 
      {/* ÉDITEUR */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Éditeur
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          <b>PARADOXE &amp; MÉDIAS RES</b><br />
          Association déclarée — Loi 1901<br />
          RNA : W751280581<br />
          Siège social : 39 boulevard Ney, Étage 4 — 75018 Paris
        </p>
      </div>
 
      {/* DIRECTION */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Direction de la publication
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          <b>Directeur de la publication :</b> Simon Devaux<br />
          <b>Co-rédacteurs·ices en chef :</b> Sacha Festy, Diane Perroux<br />
          <b>Éditeurs :</b> Mathias Franchet, Mattéo Lukat
        </p>
      </div>
 
      {/* ASSOCIATION */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Direction de l'association
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          <b>Co-Présidents :</b> Mathias Franchet, Mattéo Lukat<br />
          <b>Vice-Présidentes :</b> Nina Gayet, Pauline Michelot<br />
          <b>Trésorier :</b> Louis Toscan du Plantier<br />
          <b>Directeur juridique :</b> Alix Lerquet
        </p>
      </div>
 
      {/* HÉBERGEMENT */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Hébergement
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          Ce site est hébergé par <b>IONOS SE</b><br />
          7 Place de la Gare — 57200 Sarreguemines, France<br />
          <a href="https://www.ionos.fr" style={{ color: "#E8006E" }}>www.ionos.fr</a>
        </p>
      </div>
 
      {/* CRÉDITS */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Crédits
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          <b>Images :</b><br />
          Page d'accueil : Sellena Bitoun<br />
          Nos numéros : Juliette GTX<br />
          Nos points de ventes : Nina Gayet<br />
          Actualités : Nina Gayet<br />
          À propos &amp; Contacts : Camille Legeay<br />
          <br />
          <b>Textes : </b> Paradoxe &amp; Médias Res, Nina Gayet, Camille Legeay, Léo Demeilliers
        </p>
      </div>
 
      {/* PROPRIÉTÉ INTELLECTUELLE */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Propriété intellectuelle
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          L'ensemble du contenu de ce site — textes, images, mise en page et éléments graphiques — est la propriété exclusive de l'association Paradoxe &amp; Médias Res ou de leurs auteurs respectifs, et est protégé par le droit d'auteur. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation préalable et écrite de l'association, est strictement interdite.
        </p>
      </div>
 
      {/* DONNÉES PERSONNELLES */}
      <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E8006E", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Données personnelles
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#333" }}>
          Ce site ne collecte aucune donnée personnelle à des fins commerciales. Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à l'adresse du siège social.
        </p>
      </div>
 
      <Footer />
    </>
  );
}
 