const CategoryPage = ({ categoryPosts }: { categoryPosts: Post[] }) => {
  console.log("[categoryPosts]", categoryPosts);

  return categoryPosts.map((post) => (
    <div>
      <a href={`/${post._raw.flattenedPath}`}>
        <h1>{post.title}</h1>
      </a>
    </div>
  ));
};
export default CategoryPage;
