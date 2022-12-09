import styles from "@styles/components/category.module.css";

const CategoryPage = ({ categoryPosts }: { categoryPosts: Post[] }) => {
  return categoryPosts.map((post) => {
    return (
      <div key={post._id} className={styles.postCard}>
        <a href={`/${post._raw.flattenedPath}`} className={styles.postText}>
          <h1 className={styles.postTitle}>{post.title}</h1>

          {post.summary && <p className={styles.postSummary}>{post.summary}</p>}
        </a>

        <div className={styles.tagList}>
          {post.tag.map((tag) => (
            <p key={tag} className={styles.tagItem}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    );
  });
};
export default CategoryPage;
