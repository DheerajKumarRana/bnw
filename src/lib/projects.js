import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

function getJsonMetadata(slug) {
  const jsonPath = path.join(projectsDirectory, `${slug}.json`);
  try {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (e) {
    return null;
  }
}

function getHtmlContent(slug) {
  const htmlPath = path.join(projectsDirectory, `${slug}.html`);
  try {
    return fs.readFileSync(htmlPath, 'utf8');
  } catch (e) {
    return null;
  }
}

export function getProjectSlugs() {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const slugs = [...new Set(
      fileNames
        .filter(fileName => fileName.endsWith('.html'))
        .map(fileName => fileName.replace('.html', ''))
    )];
    return slugs;
  } catch (e) {
    console.error('Error reading project slugs:', e);
    return [];
  }
}

export function getAllProjects(limit = 20, skip = 0) {
  try {
    const slugs = getProjectSlugs();
    
    return slugs.slice(skip, skip + limit).map(slug => {
      const metadata = getJsonMetadata(slug);
      return {
        slug,
        ...metadata,
      };
    }).filter(project => project.title);
  } catch (e) {
    console.error('Error reading projects:', e);
    return [];
  }
}

export function getProjectBySlug(slug) {
  try {
    const metadata = getJsonMetadata(slug);
    const contentHtml = getHtmlContent(slug);

    if (!metadata || !contentHtml) {
      return null;
    }

    return {
      slug,
      contentHtml,
      ...metadata,
    };
  } catch (e) {
    console.error('Error reading project:', e);
    return null;
  }
}

export function getProjectMetadataBySlug(slug) {
  try {
    const metadata = getJsonMetadata(slug);
    if (!metadata) return null;
    return { slug, ...metadata };
  } catch (e) {
    return null;
  }
}