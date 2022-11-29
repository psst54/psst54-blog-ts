import styles from "@styles/components/content.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { type Post, type Category } from "contentlayer/generated";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

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
      <div className={styles.postHeader}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDate}>{dateToString(post.date)}</p>
      </div>

      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath]}
        rehypePlugins={[rehypeKatex]}
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
          li({ node, children, ...props }) {
            return (
              <li {...props} className={styles.styledLi}>
                {children}
              </li>
            );
          },
          ol({ node, children, ...props }) {
            return (
              <ol {...props} className={styles.styledOl}>
                {children}
              </ol>
            );
          },
          ul({ node, children, ...props }) {
            return (
              <ul {...props} className={styles.styledUl}>
                {children}
              </ul>
            );
          },
          a({ node, children, href, ...props }) {
            return (
              <a
                href={href}
                target="_blank"
                {...props}
                className={styles.styledA}
              >
                {children}
              </a>
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return inline ? (
              <code className={styles.styledCode} {...props}>
                {children}
              </code>
            ) : match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={nord}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={nord}
                language="textile"
                PreTag="div"
                {...props}
              />
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
