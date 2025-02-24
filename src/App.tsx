import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BlogList } from "./components/BlogList";
import { BlogPostPage } from "./pages/BlogPostPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
export function App() {
  return <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 w-full flex flex-col transition-colors">
          <Header />
          <main className="py-8 flex-grow">
            <Routes>
              <Route path="/" element={<BlogList />} />
              <Route path="/post/:id" element={<BlogPostPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>;
}