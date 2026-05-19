"use client"

import { useState } from "react"

export default function PdfViewer({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#222" }}>
          Lire le numéro
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.5rem 1.25rem",
            background: "#485F63",
            color: "white",
            borderRadius: "6px",
            fontSize: "0.9rem",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          Télécharger le PDF
        </a>
      </div>

      <div style={{ position: "relative", width: "100%", height: "80vh" }}>

        {!loaded && (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            background: "#f9f9f9",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              border: "3px solid #e0e0e0",
              borderTop: "3px solid #485F63",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }} />
            <p style={{ fontSize: "0.9rem", color: "#888" }}>Chargement du PDF...</p>
          </div>
        )}

        <iframe
          src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}