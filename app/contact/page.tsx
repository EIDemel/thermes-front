import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      {/* HERO */}
      <div style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <img
          src="/images/contact.jpeg"
          alt="Nous contacter"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
          <h1 style={{ color: "white", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, textAlign: "center", margin: 0 }}>
            Nous contacter
          </h1>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
          <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>


      <main style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
      }}>
        <div style={{ maxWidth: "640px", width: "100%" }}>

          {/* Eyebrow */}
          <p style={{
            margin: "0 0 1.5rem",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#999",
          }}>
            Nous rejoindre
          </p>

          {/* Heading */}
          <h1 style={{
            margin: "0 0 2.5rem",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            color: "#485F63",
            lineHeight: 1.15,
          }}>
            Contribuer à la revue
          </h1>

          {/* Divider */}
          <div style={{
            width: "40px",
            height: "1px",
            background: "#bbb",
            marginBottom: "2.5rem",
          }} />

          {/* Body text */}
          <p style={{
            margin: "0 0 1.4rem",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#333",
          }}>
            Tu as envie de créer autour du cinéma ? Thermes est une revue pensée par toutes et tous, pour toutes et tous.
          </p>
          <p style={{
            margin: "0 0 1.4rem",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#333",
          }}>
            Nous sommes perpétuellement à la recherche de nouveaux·elles contributeur·ices pour la revue. Articles, dessins, photographies… Toutes les créations et propositions sont les bienvenues.
          </p>
          <p style={{
            margin: "0 0 3rem",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#333",
          }}>
            N'hésite pas à nous contacter !
          </p>

          {/* Contact buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>

            <a
              href="https://instagram.com/revuethermes"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                textDecoration: "none",
                color: "#fff",
                background: "#D4561C",
                border: "1px solid #D4561C",
                borderRadius: "2px",
                padding: "1rem 1.4rem",
                fontSize: "0.9rem",
                transition: "background 0.18s, border-color 0.18s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              <span style={{ fontWeight: 500 }}>@revuethermes</span>
            </a>

            <a
              href="mailto:revuethermes@gmail.com"
              className="contact-btn-dark"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                textDecoration: "none",
                color: "#fff",
                background: "#C4005E",
                border: "1px solid #C4005E",
                borderRadius: "2px",
                padding: "1rem 1.4rem",
                fontSize: "0.9rem",
                transition: "background 0.18s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              <span style={{ fontWeight: 500 }}>revuethermes@gmail.com</span>
            </a>

          </div>

        </div>
      </main>

      <Footer />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        .contact-btn:hover {
          background: #BF4D18 !important;
          border-color: #BF4D18 !important;
        }
        .contact-btn-dark:hover {
          background: #A80052 !important;
          border-color: #A80052 !important;
        }
      `}</style>
    </>
  );
}