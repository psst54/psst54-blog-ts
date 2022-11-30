import Head from "next/head";
import Header from "@components/header";
import Content from "@components/content";
import styles from "@styles/home.module.css";
import {
  allPosts,
  allCategories,
  type Post,
  type Category,
} from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { GetStaticProps } from "next";
import PostMainPage from "@components/content/postMain";

const Blog = ({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) => {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>abs(YES) | posts</title>
      </Head>

      <Header />
      <Content
        posts={posts}
        categories={categories}
        children={<PostMainPage posts={posts} />}
      />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published_at), new Date(b.published_at))
  );
  const categories: Category[] = allCategories;

  return { props: { posts, categories } };
};

export default Blog;
