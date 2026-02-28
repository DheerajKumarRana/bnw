import { getProjectSlugs, getProjectBySlug, getProjectMetadataBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";
import SingleListingHero from "./components/SingleListingHero";
import ProjectForm from "../../../components/ProjectForm";
import "./page.css";
import GallerySlider from "./components/GallerySlider";
import { ProjectContent } from "./ProjectContent";
import AmenitiesSlider from "./components/AmenitiesSlider";
import FAQSection from "./components/FaqSection";

export async function generateStaticParams() {
  const slugs = getProjectSlugs();

  return slugs.map(slug => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectMetadataBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description || "BNW Premium Project",
  };
}

export default async function SingleProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <SingleListingHero project={ project } />
      <div className="min-h-screen bg-stone-50">
        <main className="mx-auto py-4">
          { project.contentHtml && (
            <ProjectContent html={ project.contentHtml } />
          ) }
        </main>
      </div>
      <ProjectForm />
    </>
  );
}