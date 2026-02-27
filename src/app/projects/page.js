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
        className="min-h-screen px-6 md:px-12 lg:px-20 pb-28"
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

// function ProjectCard({ project }) {
//   return (
//     <div
//       className="relative overflow-hidden rounded-sm cursor-pointer group"
//       style={ { aspectRatio: "4/3" } }
//     >
//       <Link href={ `/projects/${project.slug}` }>
//         { project.images && project.images.length > 0 && (
//           <img
//             src={ project.images[0] }
//             alt={ project.title }
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//           />
//         ) }

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

//         <div className="absolute bottom-0 left-0 right-0 p-5">
//           <h3 className="text-white leading-snug mb-3 transition-all duration-300 font-lato font-medium">
//             { project.title }
//           </h3>
//           { project.description && (
//             <p className="text-white/70 text-sm mb-3 line-clamp-2">
//               { project.description }
//             </p>
//           ) }
//           <button className="inline-flex items-center font-lato text-[#bf9e77] text-sm font-medium tracking-wide">
//             View Project &gt;
//           </button>
//         </div>
//       </Link>
//     </div>
//   );
// }