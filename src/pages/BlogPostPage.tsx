import React from "react";
import { useParams } from "react-router-dom";
import { samplePosts } from "../data/posts";
import { Tag } from "../components/Tag";
export const BlogPostPage = () => {
  const {
    id
  } = useParams();
  const post = samplePosts[Number(id)];
  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 dark:text-white">
        Post not found
      </div>;
  }
  return <article className="max-w-4xl mx-auto px-4">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => <Tag key={index} text={tag} />)}
      </div>
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {post.title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </article>;
};