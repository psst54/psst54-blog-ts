import { type Post } from "contentlayer/generated";
import styles from "@styles/components/category.module.css";

const PostMainPage = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map((post) => (
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
      ))}
    </div>
  );
};

export default PostMainPage;
