import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOCS_PATH = path.join(__dirname, '../src/content/docs');
const SUBFOLDERS = ['about', 'configuration', 'installation', 'misc', 'usage', 'tools'];
const EXCLUDE_FILES = ['404.md', 'api.mdx'];

function processContent(content) {
    return content
        .split('\n')
        .filter(line => !line.trim().startsWith('import') && !line.trim().startsWith('export'))
        .join('\n')
        .trim();
}

function extractSubHeadings(content, slug) {
    const headingRegex = /^(#{2,3})\s+(.*)/gm;
    let match;
    const headings = [];

    while ((match = headingRegex.exec(content)) !== null) {
        const heading = match[2].trim();
        const headingSlug = `${slug}#${heading
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')}`;
        headings.push({
            title: heading,
            url: `/docs${headingSlug}`
        });
    }

    return headings;
}

function parseMarkdownFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);

    const cleanContent = processContent(content);

    const title = data.title || cleanContent.match(/^#\s+(.*)/)?.[1] || 'Untitled';
    const slug = filePath.replace(DOCS_PATH, '').replace(/\\/g, '/').replace(/\.mdx?$/, '');

    const mainData = {
        title,
        url: `/docs${slug}`
    };

    const subHeadings = extractSubHeadings(cleanContent, slug);

    return [mainData, ...subHeadings];
}

function searchDocs() {
    const results = [];

    function traverseDirectory(directory) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory() && SUBFOLDERS.includes(path.basename(fullPath))) {
                traverseDirectory(fullPath);
            } else if (
                stat.isFile() &&
                (file.endsWith('.md') || file.endsWith('.mdx')) &&
                !EXCLUDE_FILES.includes(file)
            ) {
                const fileData = parseMarkdownFile(fullPath);
                results.push(...fileData);
            }
        });
    }

    traverseDirectory(DOCS_PATH);
    return results;
}

function generateLlmsFile(docsData) {
    const llmsContent = ['# Daytona', '', '## Docs', ''];

    docsData.forEach(doc => {
        llmsContent.push(`[${doc.title}](https://daytona.io${doc.url})`);
    });

    const llmsFilePath = path.join(__dirname, '../llms.txt');
    fs.writeFileSync(llmsFilePath, llmsContent.join('\n'), 'utf8');
    console.log('llms.txt index updated');
}

function main() {
    const docsData = searchDocs();
    generateLlmsFile(docsData);
}

main();
