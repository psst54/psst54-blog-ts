import styles from "@styles/components/content.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { type Post, type Category } from "contentlayer/generated";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { redirect } from "next/dist/server/api-utils";

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponent } from "next-contentlayer/hooks";

import Image from "next/image";

const Aside = ({ children, ...props }) => {
  return <div className={styles.styledBox}>{children}</div>;
};
const Highlight = ({ children, ...props }) => {
  return <span className={styles.styledHighlight}>{children}</span>;
};

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

  const components = {
    h1: (props) => <h1 className={styles.styledH1} {...props} />,
    h2: (props) => <h2 className={styles.styledH2} {...props} />,
    h3: (props) => <h3 className={styles.styledH3} {...props} />,
    h4: (props) => <h4 className={styles.styledH3} {...props} />,
    h5: (props) => <h5 className={styles.styledH3} {...props} />,
    h6: (props) => <h6 className={styles.styledH3} {...props} />,
    p: (props) => <p className={styles.styledP} {...props} />,
    a: (props) => <a target="_blank" className={styles.styledA} {...props} />,
    li: (props) => <li className={styles.styledLi} {...props} />,
    ol: (props) => <ol className={styles.styledOl} {...props} />,
    ul: (props) => <ul className={styles.styledUl} {...props} />,
    pre: (props) => <pre style={{ overflow: "auto" }} {...props} />,
    img: (props) => (
      <img
        src={props.src}
        alt={props.alt}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    ),
    code: ({ className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");

      return match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={nord}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={styles.styledCode} {...props}>
          {children}
        </code>
      );
    },
    Aside,
    Highlight,
  };

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <div className={styles.postHeader}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDate}>{dateToString(post.published_at)}</p>
      </div>

      <MDXContent components={components} />
    </div>
  );
};

export default Content;
