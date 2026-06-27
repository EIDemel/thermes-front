import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Trombinoscope from "../components/trombinoscope/Trombinoscope";



export default async function NosNumeros() {

  return (  
    <>
      <Header />

      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/a_propos.jpeg"
          alt="À propos"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ margin: 20, backgroundColor: "#E8006E", color: "#FFB8DA", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, textAlign: "center", padding: "0.5rem 1rem" }}>
            À PROPOS
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

      {/* texte presentation de thermes */}

        <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
          <h3><img src="/images/logo-thermes-noir.png" alt="Logo Thermes" style={{ width: "75px", marginBottom: "1rem", verticalAlign: "middle" }} /> </h3>

          <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#333" }}>
            <b>THERMES</b> est une revue de cinéma, née en  2025.<br />
            Elle est un espace d’expression et de création autour des films, comme une aire de jeux, expérimentale. Pensée par Simon, Sacha et Diane, ses fondateurs, augmentée par chacun.e de ses contributeur.ice.
            Imaginé à partir d’un vers de poésie, chaque numéro de Thermes réunit des arts et des visions, encourage la réflexion autour du cinéma. Tout.e volontaire est le.a bienvenu.e pour créer, écrire, imaginer cette revue, sans restriction d'âge, d'expérience, ou de profil. <br /> Nous sommes perpétuellement à la recherche de nouveaux.elles contributeur.ices pour proposer articles écrits, dessins, poésies, photographies...  
          </p>
        </div>

       {/* texte presentation de paradox ( l'asso qui produit et finance la revue ) logo à gauche en petit */}    

        <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>

          <h3> <img src="/images/logo-paradox.png" alt="Logo Paradox" style={{ width: "75px", marginBottom: "1rem", verticalAlign: "middle" }} /></h3>
          <p style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#333" }}>
            <b>PARADOXE & MEDIAS RES</b> est la structure qui produit et édite Thermes, son premier projet à voir le jour ! <br />
            Chez PARADOXE, le cinéma c’est avant tout un ensemble : un ensemble d’arts, de lieux, de personnalités, d’idées. 
            Dès les premiers instants, à l’heure de la sieste pendant l’été 2025, Thermes nous est apparu comme l’espace où tous ces ensembles pouvaient se rencontrer. 
            Depuis, Mathias et Mattéo, producteurs et éditeurs, se sont lancés sans hésiter dans ce projet où tout était à apprendre et à faire,
            et qui a ouvert une route que l’on est ravis de partager avec ceux qui s’y sont engagés avec nous.
          </p>
        </div>

        {/* trombinoscope de 5images de personnes ( dynamique si que 3 photos)  petit fondu pour afficher textes quand on hover une image en dure 3 puis 2 */} 

        {/* Trombinoscope — 3 + 2 layout avec overlay hover */}
        <div style={{ maxWidth: "1200px", margin: "2rem auto", padding: "0 1rem" }}>
          <h3 style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "#333" }}><b> L'ÉQUIPE THERMES </b></h3>
          <Trombinoscope />
        </div>

          <style>{`
            .trombi-card:hover .trombi-overlay { opacity: 1; }
            .trombi-card:hover img { transform: scale(1.07); }
          `}</style>

          <Footer />
          
    </>
  );
}