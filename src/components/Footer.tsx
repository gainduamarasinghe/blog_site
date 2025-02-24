import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">
              About
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sharing my thoughts and experiences about web development,
              programming, and technology.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </Link>
              <Link to="/about" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                About
              </Link>
              <Link to="/contact" className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t dark:border-gray-800 pt-8">
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>© {new Date().getFullYear()} My Blog</span>
          </div>
        </div>
      </div>
    </footer>;
};