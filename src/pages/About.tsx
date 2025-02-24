import React from "react";
import { BookOpen, Code, MessageCircle, User } from "lucide-react";
export const About = () => {
  return <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Passionate developer and writer sharing insights about web
          development, programming, and technology.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg">
              <Code className="text-blue-600 dark:text-blue-300" size={24} />
            </div>
            <h2 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
              Developer
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            With over 5 years of experience in web development, specializing in
            React and modern JavaScript.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg">
              <BookOpen className="text-green-600 dark:text-green-300" size={24} />
            </div>
            <h2 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
              Writer
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Sharing knowledge through technical articles and tutorials to help
            others learn and grow.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
              <MessageCircle className="text-purple-600 dark:text-purple-300" size={24} />
            </div>
            <h2 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
              Mentor
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Helping other developers grow through mentorship and community
            engagement.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border dark:border-gray-700">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 dark:bg-orange-900 p-2 rounded-lg">
              <User className="text-orange-600 dark:text-orange-300" size={24} />
            </div>
            <h2 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
              Community Builder
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Active participant in the developer community, organizing meetups
            and workshops.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Let's Connect!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          I'm always interested in hearing from readers and fellow developers.
          Feel free to reach out!
        </p>
        <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get in Touch
        </a>
      </div>
    </div>;
};