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

export default function Home({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>abs(YES)</title>
        <meta name="description" content="hi" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Content posts={posts} categories={categories} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published_at), new Date(b.published_at))
  );
  const categories: Category[] = allCategories;

  return { props: { posts, categories } };
};
