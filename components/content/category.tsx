import react from "react";
import { useRouter, usePathname } from "next/navigation";
import styles from "@styles/components/category.module.css";
import { type Post } from "contentlayer/generated";

const CategoryPage = ({ categoryPosts }: { categoryPosts: Post[] }) => {
  const router = useRouter();
  const showPageNum = 5;
  const maxPageNum = Math.ceil(categoryPosts.length / showPageNum);

  const [currentPage, setCurrentPage] = react.useState(1);
  const [showPost, setShowPost] = react.useState<Post[]>([]);
  const pathname = usePathname();

  react.useEffect(() => {
    const query = window.location.search
      .replace("?", "")
      .split("&")
      .map((param) => param.split("="))
      .reduce((values: any, [key, value]) => {
        values[key] = value;
        return values;
      }, {});

    const page = query?.page
      ? Number(query.page) <= maxPageNum
        ? Number(query.page)
        : maxPageNum
      : 1;

    setCurrentPage(page);
    setShowPost(
      categoryPosts.slice(
        showPageNum * (page - 1),
        showPageNum * (page - 1) + showPageNum
      )
    );
  }, [router]);

  return (
    <div>
      {showPost.map((post) => (
        <div key={post._id} className={styles.postCard}>
          <a href={`/${post._raw.flattenedPath}`} className={styles.postText}>
            <h1 className={styles.postTitle}>{post.title}</h1>

            {post.summary && (
              <p className={styles.postSummary}>{post.summary}</p>
            )}
          </a>

          <div className={styles.tagList}>
            {post.tag &&
              post.tag.map((tag) => (
                <p key={tag} className={styles.tagItem}>
                  {tag}
                </p>
              ))}
          </div>
        </div>
      ))}

      <div className={styles.buttonContainer}>
        <button
          className={`${styles.prevNextButton} ${
            currentPage == 1 && styles.disabledButton
          }`}
          onClick={() => {
            if (currentPage - 1 > 0) {
              router.push(pathname + "?page=" + (currentPage - 1));
            }
          }}
        >
          {"<"}
        </button>
        {Array(maxPageNum)
          .fill(0)
          .map((_, idx) => (
            <button
              className={`${styles.pageButton} ${
                idx + 1 == currentPage && styles.selectedButton
              }`}
              key={idx + 1}
              onClick={() => {
                router.push(pathname + "?page=" + (idx + 1));
              }}
            >
              {idx + 1}
            </button>
          ))}
        <button
          className={`${styles.prevNextButton} ${
            currentPage == maxPageNum && styles.disabledButton
          }`}
          onClick={() => {
            if (currentPage + 1 <= maxPageNum) {
              router.push(pathname + "?page=" + (currentPage + 1));
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
