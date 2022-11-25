import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    category: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    fileName: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath.slice("path/".length)}`,
    },
  },
}));

export const Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: `category/**/*.mdx`, // Type of file to parse (every mdx in all subfolders)
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    id: {
      type: "string",
      description: "The date of the post",
      required: true,
    },
    subCategory: {
      type: "list",
      of: { type: "string" },
    },
  },
}));

export default makeSource({
  contentDirPath: "files",
  documentTypes: [Post, Category],
});
