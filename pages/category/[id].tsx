import Head from "next/head";
import Header from "@components/header";
import Content from "@components/content";
import styles from "@styles/Home.module.css";
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
  paramsId,
  posts,
  categories,
  categoryPosts,
  description,
}: {
  paramsId: string;
  posts: Post[];
  categories: Category[];
  categoryPosts: Post[];
  description: string | null;
}) => {
  return (
    <div className={styles.fullScreen}>
      <Head>
        <title>abs(YES) | {paramsId}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=5"
        />
        <meta
          name="description"
          content={description ? description : "psst54의 공부 블로그"}
        />
        <meta name="robots" content="noindex" />
        <meta name="Googlebot" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <Content posts={posts} categories={categories}>
          <CategoryPage categoryPosts={categoryPosts} />
        </Content>
      </div>
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

  const categoryPosts: Post[] | undefined = allPosts.filter((post) =>
    post.category.includes(params!.id!.toString())
  );

  const currentCategory: Category | undefined = allCategories.find(
    (post) => post?.id === params?.id
  );

  return {
    props: {
      posts,
      categories,
      categoryPosts,
      paramsId: params?.id,
      description: currentCategory?.description
        ? currentCategory?.description
        : null,
    },
  };
};

export default Post;
