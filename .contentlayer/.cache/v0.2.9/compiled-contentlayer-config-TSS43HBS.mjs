// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the post",
      required: true
    },
    published_at: {
      type: "date",
      description: "Published time of the post",
      required: true
    },
    category: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    tag: {
      type: "list",
      of: { type: "string" }
    },
    summary: {
      type: "string"
    }
  },
  computedFields: {
    fileName: {
      type: "string",
      resolve: (post) => `${post._raw.flattenedPath.slice("path/".length)}`
    }
  }
}));
var Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: `category/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    id: {
      type: "string",
      required: true
    },
    index: {
      type: "number",
      required: true
    },
    subCategory: {
      type: "list",
      of: { type: "string" }
    }
  }
}));
var Main = defineDocumentType(() => ({
  name: "Main",
  filePathPattern: `main.mdx`,
  contentType: "mdx"
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "files",
  documentTypes: [Post, Category, Main],
  mdx: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
});
export {
  Category,
  Main,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-TSS43HBS.mjs.map
