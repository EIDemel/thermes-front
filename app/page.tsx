import HeroPage from "./components/sections/HeroPage";

async function getPosts() {
  const res = await fetch(
    "https://cms.revuethermes.fr/thermes/wp-json/wp/v2/posts?_embed",
    { cache: "no-store" }
  );
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return <HeroPage posts={posts} />;
}