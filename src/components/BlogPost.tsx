import React from "react";
import { Link } from "react-router-dom";
import { Tag } from "./Tag";
interface BlogPostProps {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  tags: string[];
}
export const BlogPost = ({
  id,
  title,
  date,
  excerpt,
  imageUrl,
  tags
}: BlogPostProps) => {
  return <article className="border-b dark:border-gray-800 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {date}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => <Tag key={index} text={tag} />)}
          </div>
          <Link to={`/post/${id}`} className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            Read more →
          </Link>
        </div>
      </div>
    </article>;
};