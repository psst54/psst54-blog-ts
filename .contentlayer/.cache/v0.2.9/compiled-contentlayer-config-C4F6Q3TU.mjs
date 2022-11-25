// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `post/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    category: {
      type: "list",
      of: { type: "string" }
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.sourceFileName}`
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
      description: "The title of the post",
      required: true
    },
    id: {
      type: "string",
      description: "The date of the post",
      required: true
    },
    subCategory: {
      type: "list",
      of: { type: "string" }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "files",
  documentTypes: [Post, Category]
});
export {
  Category,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-C4F6Q3TU.mjs.map
