import { getAllNewsSlugs, getNewsBySlug } from "@/lib/news";
import { notFound } from "next/navigation";
import ImageSlider from "./components/ImageSlider";
import RelatedArticles from "./components/RelatedArticles";
import { getNewsMetadataBySlug } from "@/lib/news";

export async function generateStaticParams() {
  const articles = getAllNewsSlugs();

  return articles.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.description || "Premier real estate developer in UAE.",
  };
}

export default async function SingleNewsPage({ params }) {
    const { slug } = await params;
    const article = await getNewsBySlug(slug);
    if (!article) return notFound();

    const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    let relatedArticles;

    if (article.relatedArticles) {
        relatedArticles = (await Promise.all(
            article.relatedArticles?.map(slug => getNewsMetadataBySlug(slug))
        )).filter(Boolean);;
    }

    return (
        <div className="min-h-screen bg-stone-50">

            {/* Article */ }
            <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">

                {/* Title */ }
                <h1 className="text-2xl sm:text-4xl font-noto leading-tight tracking-tight text-stone-900 mb-6">
                    { article.title }
                </h1>

                {/* Meta */ }
                {article.publisher && <div className="flex items-center gap-2 mb-2">
                    <p className="text-[#BF9E77] text-xl">{article.publisher}</p>
                </div>}
                <div className="flex items-center gap-2 mb-2 pb-6">
                    <p className="text-black/50">Published On:</p>
                    <time className="text-sm text-black/50 tracking-wide">{ formattedDate }</time>
                </div>

                {/* Image Slider — client only */ }
                { article.images?.length > 0 && (
                    <div className="mb-10">
                        <ImageSlider images={ article.images } />
                    </div>
                ) }

                {/* Content */ }
                { article.contentHtml && (
                    <div
                        className={ `markdown text-base sm:text-lg leading-relaxed text-black font-lato [&_p]:mb-5 [&_p]:text-base [&_a]:text-[#BF9E77]` }
                        dangerouslySetInnerHTML={ { __html: article.contentHtml } }
                    />
                ) }

            </main>
            {relatedArticles && relatedArticles.length > 0 && <RelatedArticles articles={ relatedArticles? relatedArticles : [] } />}
        </div>
    );
}