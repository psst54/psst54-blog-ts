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
import PostPage from "@components/content/post";

const Post = ({
  posts,
  categories,
  currentPost,
}: {
  posts: Post[];
  categories: Category[];
  currentPost: Post;
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>abs(YES) | {currentPost.title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <Header />
      <Content
        posts={posts}
        categories={categories}
        children={<PostPage post={currentPost} />}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => "/" + post._raw.flattenedPath),
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

  const currentPost: Post | undefined = allPosts.find(
    (post) => post?.fileName === params?.id
  );

  return { props: { posts, categories, currentPost } };
};

export default Post;