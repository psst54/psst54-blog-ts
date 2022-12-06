import styles from "@styles/components/content.module.css";
import { type Post, type Category } from "contentlayer/generated";

const Content = ({
  posts,
  categories,
  children,
}: {
  posts: Post[];
  categories: Category[];
  children: Element | undefined;
}) => {
  categories = categories.map((category) => {
    return {
      ...category,
      cnt: posts.filter((post) => post.category.includes(category.id)).length,
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {categories.map(
          (category) =>
            category.subCategory && (
              <div key={category.title}>
                <ul className={styles.categoryName}>
                  <a href={`/category/${category.id}`}>
                    {category.title}{" "}
                    <span className={styles.categoryCnt}>({category.cnt})</span>
                  </a>
                </ul>

                {categories.map(
                  (subCategory) =>
                    category.subCategory.includes(subCategory.id) && (
                      <ul
                        className={styles.subCategoryName}
                        key={subCategory.id}
                      >
                        <a href={`/category/${subCategory.id}`}>
                          {subCategory.title}{" "}
                          <span className={styles.categoryCnt}>
                            ({subCategory.cnt})
                          </span>
                        </a>
                      </ul>
                    )
                )}
              </div>
            )
        )}
      </div>

      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Content;
