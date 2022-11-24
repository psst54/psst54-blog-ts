// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
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
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var Category = defineDocumentType(() => ({
  name: "Category",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    tmp: {
      type: "string",
      description: "The date of the post",
      required: true
    }
  }
}));
var postSource = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post]
});
var categorySource = makeSource({
  contentDirPath: "categories",
  documentTypes: [Category]
});
var contentlayer_config_default = {
  defaultSource: postSource,
  documentTypes: [Category, Post]
};
export {
  Category,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Y57F3OQ2.mjs.map
