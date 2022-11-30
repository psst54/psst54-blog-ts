import styles from "@styles/components/category.module.css";

const CategoryPage = ({ categoryPosts }: { categoryPosts: Post[] }) => {
  return categoryPosts.map((post) => {
    return (
      <div key={post._id} className={styles.postCard}>
        <a href={`/${post._raw.flattenedPath}`}>
          <h1 className={styles.postTitle}>{post.title}</h1>
        </a>

        <div className={styles.tagList}>
          {post.tag.map((tag) => (
            <p className={styles.tagItem}>{tag}</p>
          ))}
        </div>
      </div>
    );
  });
};
export default CategoryPage;
