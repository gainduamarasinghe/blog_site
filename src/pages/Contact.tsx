import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
export const Contact = () => {
  return <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to collaborate? I'd love to hear from you.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-blue-600 dark:text-blue-300" size={24} />
          </div>
          <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">
            Email
          </h2>
          <p className="text-gray-600 dark:text-gray-300">hello@example.com</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="text-green-600 dark:text-green-300" size={24} />
          </div>
          <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">
            Phone
          </h2>
          <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
        </div>
        <div className="text-center">
          <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-purple-600 dark:text-purple-300" size={24} />
          </div>
          <h2 className="font-semibold mb-2 text-gray-900 dark:text-white">
            Location
          </h2>
          <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border dark:border-gray-700 p-8">
        <ContactForm />
      </div>
    </div>;
};