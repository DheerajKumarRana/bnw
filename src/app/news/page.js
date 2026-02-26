import { getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function NewsMedia() {

  const articles = await getAllNews();

  if (!articles) return notFound();

  return (
    <section
      className="min-h-screen py-16 px-6 md:px-12 lg:px-20 pb-28"
      style={ { backgroundColor: "#000" } }
    >
      {/* Header */ }
      <div className="text-center mb-14">
        <h2
          className="text-white font-light tracking-widest"
          style={ {
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.15em",
          } }
        >
          News &amp; Media
        </h2>
      </div>

      {/* Grid */ }
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        { articles.map((item, i) => (
          <NewsCard key={ i } item={ item } />
        )) }
      </div>
    </section>
  );
}

function NewsCard({ item }) {

  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer group"
      style={ { aspectRatio: "4/3" } }
    >
      {/* Image */ }
      {item.images && item.images.length > 0 && <img
        src={ item.images[0] }
        alt={ item.title }
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />}

      {/* Gradient overlay */ }
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

      {/* Content */ }
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3
          className="text-white font-light leading-snug mb-3 transition-all duration-300"
          style={ {
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
          } }
        >
          { item.title }
        </h3>
        <a
          href={ item.readMore }
          className="inline-flex items-center text-amber-400 text-sm font-medium tracking-wide hover:text-amber-300 transition-colors duration-200"
          style={ { fontFamily: "'Georgia', serif" } }
        >
          Read More &gt;
        </a>
      </div>

      {/* Hover border effect */ }
      <div
        className="absolute inset-0 border border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/30 pointer-events-none"
      />
    </div>
  );
}
