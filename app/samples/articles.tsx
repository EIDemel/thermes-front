import { Key } from "react";

async function getPosts() {
  const res = await fetch(
    "http://www.segi8047.odns.fr/thermes/wp-json/wp/v2/posts?_embed",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container">
      <h1 className="title">Articles</h1>

      <div className="grid">
        {posts.map((post: any) => {
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <article key={post.id} className="card">
              {image && (
                <img
                  src={image}
                  alt={post.title.rendered}
                  className="card-img"
                />
              )}

              <div className="card-content">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />

                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}
                />
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}