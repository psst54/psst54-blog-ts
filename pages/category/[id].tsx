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
import CategoryPage from "@components/content/category";

const Post = ({
  posts,
  categories,
  categoryPosts,
}: {
  posts: Post[];
  categories: Category[];
  categoryPosts: Post[];
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>abs(YES) | posts</title>
      </Head>

      <Header />
      <Content
        posts={posts}
        categories={categories}
        children={<CategoryPage categoryPosts={categoryPosts} />}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: allCategories.map((category) => "/category/" + category.id),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: Post[] = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.published_at), new Date(b.published_at))
  );
  const categories: Category[] = allCategories.sort(
    (a: Category, b: Category) => (a.index < b.index ? -1 : 1)
  );

  const categoryPosts: Post | undefined = allPosts.filter((post) =>
    post?.category.includes(params?.id)
  );

  return { props: { posts, categories, categoryPosts } };
};

export default Post;
