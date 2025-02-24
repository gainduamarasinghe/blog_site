import React from "react";
interface TagProps {
  text: string;
}
export const Tag = ({
  text
}: TagProps) => {
  return <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 text-xs px-3 py-1 rounded-full">
      {text}
    </span>;
};