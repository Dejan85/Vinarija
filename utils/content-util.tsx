import fs from "fs";
import path from "path";

import matter from "gray-matter";

const contentDirectory = (dir) => path.join(process.cwd(), `content/${dir}`);

export function getContentFiles(dir) {
  return fs.readdirSync(contentDirectory(dir));
}

export function getContentData(contentIdentifier, dir) {
  const contentSlug = contentIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(contentDirectory(dir), `${contentSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const contentData = {
    slug: contentSlug,
    ...data,
    content,
  };

  return contentData;
}

export const getAllWines = (dir) => {
  const allWines = {};
  const allWinesFiles = getContentFiles(dir);

  const wines = allWinesFiles.map((contentFile) => {
    return getContentData(contentFile, dir);
  });

  wines.forEach((item) => {
    const { slug } = item;
    allWines[slug] = item;
  });

  return allWines;
};

export function getAllContent(dir) {
  const allContent = {};
  const contentFiles = getContentFiles(dir);

  const contents = contentFiles.map((contentFile) => {
    return getContentData(contentFile, dir);
  });

  contents.forEach((item) => {
    const { slug } = item;
    allContent[slug] = item;
  });

  return allContent;
}
