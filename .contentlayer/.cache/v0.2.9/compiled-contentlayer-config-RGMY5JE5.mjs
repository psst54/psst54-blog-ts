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
//# sourceMappingURL=compiled-contentlayer-config-RGMY5JE5.mjs.map
