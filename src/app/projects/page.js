import { getAllProjects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ListingHero from "./components/ListingHero";
import ListingDesc from "./components/ListingDesc";
import ProjectCard from "./components/ProjectCard";
import ProjectForm from "../../components/ProjectForm";

export const revalidate = 3600;

export default async function ProjectsPage() {
  const projects = getAllProjects();

  if (!projects || projects.length === 0) {
    return notFound();
  }

  return (
    <>
      <ListingHero />
      <ListingDesc />
      <section
        className="px-6 md:px-12 lg:px-20 lg:pb-28"
        style={ { backgroundColor: "#000" } }
      >
        <div className="max-w-7xl mx-auto">
          { projects.map((project, i) => (
            <ProjectCard key={ i } project={ project } />
          )) }
        </div>
      </section>

      <ProjectForm />
    </>
  );
}