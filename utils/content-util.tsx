import fs, { promises } from "fs";
import path from "path";

const contentDirectory = (dir) => path.join(process.cwd(), `content/${dir}`);

export function getContentFiles(dir) {
  return fs.readdirSync(contentDirectory(dir));
}

export function getContentData(contentFile, dir) {
  const contentSlug = contentFile.replace(/\.json$/, "");
  const filePath = path.join(contentDirectory(dir), `${contentSlug}.json`);

  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData.toString());

  const contentData = {
    slug: contentSlug,
    data,
  };

  return contentData;
}

export function getAllContent(dir) {
  const contentData = {};
  const contentFiles = getContentFiles(dir);
  const allContent = contentFiles.map((contentFile) => {
    return getContentData(contentFile, dir);
  });

  allContent.forEach((item) => (contentData[item.slug] = item));
  return contentData;
}

export const getAllWines = (dir) => {
  const allWines = {};
  const allWinesFiles = getContentFiles(dir);
  const wines = allWinesFiles.map((contentFile) => {
    return getContentData(contentFile, dir);
  });

  wines.forEach((item) => (allWines[item.slug] = item));
  return allWines;
};

export async function getWine(id) {
  const filePath = path.join(process.cwd(), `content/all-wines/allWines.json`);
  const jsonData = await promises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  const wine = data.filter((wine) => wine.id === id);
  return wine[0];
}
