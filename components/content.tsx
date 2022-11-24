import styles from "@styles/components/content.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { type Post, type Categories } from "contentlayer/generated";

const Content = ({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Categories[];
}) => {
  categories = categories.map((category) => {
    return {
      ...category,
      cnt: posts.filter((post) => post.category.includes(category.title))
        .length,
    };
  });

  console.log(categories);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {categories.map(
          (category) =>
            category.subCategory && (
              <div key={category.title}>
                <ul className={styles.categoryName}>{category.title}</ul>

                {categories.map(
                  (subCategory) =>
                    category.subCategory.includes(subCategory.title) && (
                      <ul
                        className={styles.subCategoryName}
                        key={subCategory.title}
                      >
                        {subCategory.title} ({subCategory.cnt})
                      </ul>
                    )
                )}
              </div>
            )
        )}
      </div>

      <div className={styles.main}>
        <h1 className={styles.postTitle}>content title</h1>
        <p className={styles.postDate}>2022.11.23.</p>

        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          components={{
            h1({ node, children, ...props }) {
              return (
                <h1 {...props} className={styles.styledH1}>
                  {children}
                </h1>
              );
            },
          }}
        >
          {"ef"}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Content;
