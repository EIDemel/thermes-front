"use client";

import { useEffect, useRef, useState } from "react";

const STORES = [
  { name: "Boutique Potemkine",              address: "30 rue Beaurepaire",        city: "Paris",    zip: "75010", lat: 48.8676, lng: 2.3614 },
  { name: "Librairie Sans Titre",            address: "143 avenue Parmentier",     city: "Paris",    zip: "75010", lat: 48.8686, lng: 2.3785 },
  { name: "Librairie Jeu de paume",          address: "1 place de la Concorde",    city: "Paris",    zip: "75008", lat: 48.8654, lng: 2.3212 },
  { name: "Librairie du Cinéma du Panthéon", address: "15 rue Victor Cousin",      city: "Paris",    zip: "75005", lat: 48.8502, lng: 2.3422 },
  { name: "Librairie Le Delta",              address: "1 rue Cassette",            city: "Paris",    zip: "75006", lat: 48.8474, lng: 2.3302 },
  { name: "Librairie L'esprit et la Plume",  address: "47 rue de Clichy",          city: "Paris",    zip: "75009", lat: 48.8806, lng: 2.3321 },
  { name: "Halle Saint Pierre",             address: "2 rue Ronsard",             city: "Paris",    zip: "75018", lat: 48.8844, lng: 2.3435 },
  { name: "Terrasse de Gunteberg",          address: "9 rue Emilio Castelar",     city: "Paris",    zip: "75012", lat: 48.8456, lng: 2.3956 },
  { name: "La Manoeuvre",                   address: "53 rue de la Roquette",     city: "Paris",    zip: "75011", lat: 48.8550, lng: 2.3734 },
  { name: "Le Bal des Ardents",             address: "17 rue Neuve",              city: "Lyon",     zip: "69001", lat: 45.7676, lng: 4.8335 },
  { name: "Librairie Thuard",               address: "24 rue de l'Étoile",        city: "Le Mans",  zip: "72100", lat: 47.9955, lng: 0.1985 },
];

const CITIES = ["Toutes les villes", "Paris", "Lyon", "Le Mans"];

type Store = typeof STORES[0];

export default function StoreMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selectedCity, setSelectedCity] = useState("Toutes les villes");
  const [activeStore, setActiveStore] = useState<Store | null>(null);
  const [ready, setReady] = useState(false);

  const filtered =
    selectedCity === "Toutes les villes"
      ? STORES
      : STORES.filter((s) => s.city === selectedCity);

  // Inject Leaflet once
  useEffect(() => {
    if ((window as any).L) { setReady(true); return; }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => setReady(true);
    document.head.appendChild(script);
  }, []);

  // Init map once Leaflet is ready
  useEffect(() => {
    if (!ready || !mapRef.current || mapInstanceRef.current) return;
    const L = (window as any).L;

    const map = L.map(mapRef.current, {
      center: [46.6, 2.3],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?language=fr",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 19,
      }
    ).addTo(map);

    mapInstanceRef.current = map;
  }, [ready]);

  // Sync markers when filter or map changes
  useEffect(() => {
    const L = (window as any).L;
    if (!L || !mapInstanceRef.current) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    filtered.forEach((store, i) => {
      const icon = L.divIcon({
        html: `<div style="
          width:30px;height:30px;border-radius:50%;
          background:#F26522;color:#fff;
          display:flex;align-items:center;justify-content:center;
          font-size:11px;font-weight:700;font-family:sans-serif;
          border:2.5px solid #fff;
          box-shadow:0 2px 10px rgba(0,0,0,0.25);
          cursor:pointer;
        ">${i + 1}</div>`,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      const marker = L.marker([store.lat, store.lng], { icon }).addTo(mapInstanceRef.current);
      marker.on("click", () => setActiveStore(store));
      markersRef.current.push(marker);
    });

    if (filtered.length > 0) {
      const group = L.featureGroup(markersRef.current);
      mapInstanceRef.current.fitBounds(group.getBounds().pad(0.35));
    }
  }, [filtered, ready]);

  const handleStoreClick = (store: Store) => {
    setActiveStore(store);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([store.lat, store.lng], 16, {
        animate: true,
        duration: 0.8,
      });
    }
  };

  const isActive = (store: Store) =>
    activeStore?.name === store.name && activeStore?.city === store.city;

  return (
    <section
      style={{
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <p style={{
            margin: "0 0 0.6rem",
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: "#999",
          }}>
            Où nous trouver
          </p>
          <h2 style={{
            margin: 0,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            fontWeight: 400,
            color: "#485F63",
            lineHeight: 1.15,
          }}>
            Points de vente
          </h2>
        </div>

        {/* Filter bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          marginBottom: "2rem",
          flexWrap: "wrap" as const,
        }}>
          <span style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#888",
          }}>
            Filtrer
          </span>

          <div style={{ position: "relative" as const, display: "inline-block" }}>
            <select
              className="city-select"
              value={selectedCity}
              onChange={(e) => { setSelectedCity(e.target.value); setActiveStore(null); }}
              style={{
                appearance: "none" as const,
                WebkitAppearance: "none" as const,
                background: "#E8006E",
                color: "#fff",
                border: "none",
                padding: "0.55rem 2.8rem 0.55rem 1.1rem",
                fontSize: "0.82rem",
                cursor: "pointer",
                borderRadius: "2px",
                letterSpacing: "0.04em",
                outline: "none",
              }}
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span style={{
              position: "absolute" as const,
              right: "0.9rem",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none" as const,
              color: "#fff",
              fontSize: "9px",
            }}>
              ▼
            </span>
          </div>

          <span style={{
            fontSize: "0.78rem",
            color: "#aaa",
            fontStyle: "italic",
          }}>
            {filtered.length} point{filtered.length > 1 ? "s" : ""} de vente
          </span>
        </div>

        {/* Map + List */}
        <div className="store-grid" style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr) 320px",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {/* Map */}
          <div className="store-map" style={{
            position: "sticky" as const,
            top: "1.5rem",
            border: "1px solid #dddad2",
            borderRadius: "3px",
            overflow: "hidden",
          }}>
            <div ref={mapRef} style={{ height: "560px", width: "100%" }} />
          </div>

          {/* Store list */}
          <div className="store-list" style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "0.6rem",
            maxHeight: "560px",
            overflowY: "auto" as const,
            paddingRight: "2px",
          }}>
            {filtered.map((store, i) => (
              <button
                key={`${store.name}-${store.city}`}
                onClick={() => handleStoreClick(store)}
                style={{
                  all: "unset" as any,
                  display: "flex",
                  gap: "0.9rem",
                  alignItems: "flex-start",
                  padding: "0.9rem 1.1rem",
                  background: isActive(store) ? "#F26522" : "#fff",
                  color: isActive(store) ? "#fff" : "#F26522",
                  border: `1px solid ${isActive(store) ? "#F26522" : "#dddad2"}`,
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "background 0.18s, color 0.18s, border-color 0.18s",
                  textAlign: "left" as const,
                  boxSizing: "border-box" as const,
                  width: "100%",
                }}
              >
                <span style={{
                  flexShrink: 0,
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: isActive(store) ? "#fff" : "#F26522",
                  color: isActive(store) ? "#F26522" : "#fff",
                  fontSize: "10px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "1px",
                }}>
                  {i + 1}
                </span>
                <div style={{ minWidth: 0 }}>
                  <p style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    lineHeight: 1.35,
                  }}>
                    {store.name}
                  </p>
                  <p style={{
                    margin: "3px 0 0",
                    fontSize: "0.75rem",
                    lineHeight: 1.55,
                    color: isActive(store) ? "rgba(255,255,255,0.65)" : "#888",
                  }}>
                    {store.address}<br />
                    {store.zip} {store.city}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .city-select:focus { outline: none !important; box-shadow: none !important; }
        .city-select option { background: #E8006E; color: #fff; }
        .leaflet-container { font-family: 'Georgia', serif !important; }
        .leaflet-popup-content-wrapper {
          border-radius: 2px !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.12) !important;
        }
        div::-webkit-scrollbar { width: 4px; }
        div::-webkit-scrollbar-track { background: transparent; }
        div::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }
        div::-webkit-scrollbar-thumb:hover { background: #aaa; }

        @media (max-width: 768px) {
          .store-grid {
            grid-template-columns: 1fr !important;
          }
          .store-list {
            max-height: none !important;
            overflow-y: visible !important;
          }
          .store-map {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}