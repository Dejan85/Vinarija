import fs from "fs";
import path from "path";

import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/home");

export function getContentFiles() {
  return fs.readdirSync(contentDirectory);
}

export function getContentData(contentIdentifier) {
  const contentSlug = contentIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(contentDirectory, `${contentSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const contentData = {
    slug: contentSlug,
    ...data,
    content,
  };

  return contentData;
}

export function getAllContent() {
  const allContent = {};
  const contentFiles = getContentFiles();

  const contents = contentFiles.map((contentFile) => {
    return getContentData(contentFile);
  });

  contents.forEach((item) => {
    const { slug } = item;
    allContent[slug] = item;
  });

  return allContent;
}
