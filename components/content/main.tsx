import styles from "@styles/components/content.module.css";
import { allMains, type Main } from "contentlayer/generated";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useMDXComponent } from "next-contentlayer/hooks";

const Aside = ({ children, ...props }) => {
  return <div className={styles.styledBox}>{children}</div>;
};
const Highlight = ({ children, ...props }) => {
  return <span className={styles.styledHighlight}>{children}</span>;
};

const MainPage = ({ mainPost }: { mainPost: Main[] }) => {
  console.log(mainPost);

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

  const MDXContent = useMDXComponent(mainPost.body.code);

  return <MDXContent components={components} />;
};

export default MainPage;
