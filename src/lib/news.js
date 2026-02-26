import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const newsDirectory = path.join(process.cwd(), 'content/news');

export function getAllNewsSlugs() {
    try {
        const fileNames = fs.readdirSync(newsDirectory);

        return fileNames.map(fileName => {
            const slug = fileName.replace('.md', '');
            return slug;
        });
    } catch (e) {
        console.error('Error returning all news slugs:', e);
        return [];
    }
}

export function getAllNews(limit = 20, skip = 0) {
    try {
        const fileNames = fs.readdirSync(newsDirectory).slice(skip, skip + limit);

        return fileNames.map(fileName => {
            const slug = fileName.replace('.md', '');
            const fullPath = path.join(newsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return { slug, ...data };
        });
    } catch (e) {
        console.error('Error reading news:', e);
        return [];
    }
}

export async function getNewsBySlug(slug) {
    try {
        const fullPath = path.join(newsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data, content } = matter(fileContents);
        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return { slug, contentHtml, ...data };
    } catch (e) {
        return null;
    }
}

export async function getNewsMetadataBySlug(slug) {
    try {
        const fullPath = path.join(newsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data } = matter(fileContents);

        return { slug, ...data };
    } catch (e) {
        return null;
    }
}