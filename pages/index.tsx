import Head from "next/head";
import Header from "@components/header";
import Content from "@components/content";
import styles from "@styles/home.module.css";
import {
  allPosts,
  allCategories,
  allMains,
  type Post,
  type Category,
  type Main,
} from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { GetStaticProps } from "next";
import MainPage from "@components/content/main.tsx";

export default function Home({
  posts,
  categories,
  mainPost,
}: {
  posts: Post[];
  categories: Category[];
  mainPost: Main;
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
      <Content
        posts={posts}
        categories={categories}
        children={<MainPage mainPost={mainPost} />}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published_at), new Date(b.published_at))
  );
  const categories: Category[] = allCategories.sort(
    (a: Category, b: Category) => (a.index < b.index ? -1 : 1)
  );
  const mainPost: Main = allMains[0];

  return { props: { posts, categories, mainPost } };
};
