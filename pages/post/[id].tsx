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
  console.log("[currentPost]", currentPost);
  console.log("[allPosts]", allPosts);

  return (
    <div className={styles.container}>
      <Head>
        <title>abs(YES) | posts</title>
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
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const categories: Category[] = allCategories;
  const currentPost: Post | undefined = allPosts.find(
    (post) => post?.fileName === params?.id
  );

  return { props: { posts, categories, currentPost } };
};

export default Post;
