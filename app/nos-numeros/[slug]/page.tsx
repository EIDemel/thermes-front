import Header from "../../components/layout/Header";
import { notFound } from "next/navigation";
import PdfViewer from "./PdfViewer";
import Footer from "@/app/components/layout/Footer";

async function getNumero(slug: string) {
  const res = await fetch(
    `https://cms.revuethermes.fr/thermes/wp-json/wp/v2/posts?slug=${slug}&categories=6&_embed`,
    { cache: "no-store" }
  );

  const data = await res.json();

  if (!data || data.length === 0) notFound();

  return data[0];
}

function extractPdfUrl(content: string): string | null {
  const match = content.match(/https:\/\/[^\s"'<>]+\.pdf/i);
  return match ? match[0] : null;
}

function removePdfUrl(content: string): string {
  return content.replace(/(<a[^>]*href=["'][^"']*\.pdf["'][^>]*>.*?<\/a>|https:\/\/[^\s"'<>]+\.pdf)/gi, "");
}

export default async function NumeroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getNumero(slug);

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <>
      <Header />

      {image && (
        <div style={{ position: "relative", height: "60vh", width: "100%", overflow: "hidden" }}>
          <img
            src={image}
            alt={post.title.rendered}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "3rem 2rem",
          }}>
            <h1
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              style={{
                color: "white",
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                fontWeight: 700,
                textAlign: "center",
                margin: 0,
              }}
            />
          </div>
        </div>
      )}

      <main style={{ maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem" }}>
        {!image && (
          <>
            <h1
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1rem" }}
            />
          </>
        )}

        <div
          dangerouslySetInnerHTML={{ __html: removePdfUrl(post.content.rendered) || "" }}
          style={{ lineHeight: 1.8, fontSize: "1.05rem", color: "#222" }}
        />

        <PdfViewer url={extractPdfUrl(post.content.rendered) || ""} />

      </main>

      <Footer />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        main img { max-width: 100%; height: auto; border-radius: 8px; margin: 1.5rem 0; }
        main h2 { font-size: 1.6rem; font-weight: 700; margin: 2.5rem 0 1rem; }
        main h3 { font-size: 1.3rem; font-weight: 600; margin: 2rem 0 0.75rem; }
        main p { margin-bottom: 1.25rem; }
        main a { color: #485F63; text-decoration: underline; }
        main ul, main ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
        main li { margin-bottom: 0.5rem; }
        main blockquote { border-left: 3px solid #485F63; padding-left: 1.25rem; color: #555; margin: 1.5rem 0; }
      `}</style>
    </>
  );
}