import styles from "@styles/components/content.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { type Post, type Category } from "contentlayer/generated";

const Content = ({ post }: { post: Post[] }) => {
  const dateToString = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();

    return (
      year +
      "." +
      (month + 1 < 10 ? "0" + (month + 1) : month + 1) +
      "." +
      (day < 10 ? "0" + day : day) +
      "."
    );
  };

  return (
    <div>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postDate}>{dateToString(post.date)}</p>
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
          h2({ node, children, ...props }) {
            return (
              <h2 {...props} className={styles.styledH2}>
                {children}
              </h2>
            );
          },
          h3({ node, children, ...props }) {
            return (
              <h3 {...props} className={styles.styledH3}>
                {children}
              </h3>
            );
          },
          p({ node, children, ...props }) {
            return (
              <p {...props} className={styles.styledP}>
                {children}
              </p>
            );
          },
        }}
      >
        {post.body.raw}
      </ReactMarkdown>
    </div>
  );
};

export default Content;
