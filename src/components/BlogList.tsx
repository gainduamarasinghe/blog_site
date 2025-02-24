import { BlogPost } from "./BlogPost";
import { samplePosts } from "../data/posts";
export const BlogList = () => {
  return <div className="max-w-4xl mx-auto px-4">
      {samplePosts.map((post, index) => <BlogPost key={index} id={index} {...post} />)}
    </div>;
};