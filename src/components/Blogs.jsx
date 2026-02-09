import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import CloseIcon from '@mui/icons-material/Close';

const blogs = [
  {
    title: "Mastering React Hooks",
    excerpt: "A deep dive into useEffect, useMemo, and custom hooks for better performance.",
    content: `
      <p>React Hooks have revolutionized how we write React components. In this article, we'll explore some of the most powerful hooks and how to use them effectively.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">1. The Power of useEffect</h3>
      <p>The <code>useEffect</code> hook allows you to perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">2. Optimizing with useMemo</h3>
      <p><code>useMemo</code> returns a memoized value. It only recomputes the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">3. Creating Custom Hooks</h3>
      <p>Building your own Hooks lets you extract component logic into reusable functions. This makes your code cleaner, easier to test, and more maintainable.</p>
      
      <p class="mt-4">By mastering these hooks, you can write more efficient and readable React code. Keep experimenting and happy coding!</p>
    `,
    date: "Jan 15, 2024",
    readTime: "5 min read",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbd6sk7zjsfY8mwVucWTooKzm3j4yV6RkCw&s", 
  },
  {
    title: "The Future of Web 3.0",
    excerpt: "Exploring the impact of decentralized technologies on the modern web.",
    content: `
      <p>Web 3.0 is the next generation of the internet, focusing on decentralization, openness, and greater user utility. It’s built on blockchain technology.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">Decentralization</h3>
      <p>Unlike Web 2.0, where data is stored in centralized repositories, Web 3.0 allows information to be found based on its content, so it can be stored in multiple locations simultaneously.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">Blockchain and Crypto</h3>
      <p>Cryptocurrencies and blockchain are the backbone of Web 3.0, enabling decentralized finance (DeFi), NFTs, and secure digital identities.</p>
      
      <p class="mt-4">As we move forward, Web 3.0 promises to give users more control over their data and digital lives.</p>
    `,
    date: "Feb 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop", 
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for structuring your Express applications and database optimization.",
    content: `
      <p>Node.js is excellent for building scalable network applications. Here are some best practices to ensure your API can handle growth.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">1. Directory Structure</h3>
      <p>Organize your code logically. Separate routes, controllers, services, and models. This Separation of Concerns makes your codebase maintainable.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">2. Asynchronous Programming</h3>
      <p>Master <code>async/await</code> to handle asynchronous operations cleanly. Avoid callback hell to keep your code readable.</p>
      
      <h3 class="text-xl font-bold mt-4 mb-2">3. Database Optimization</h3>
      <p>Use indexing appropriately in MongoDB or SQL databases. Ensure your queries are efficient to prevent bottlenecks.</p>
      
      <p class="mt-4">Scalability is a journey, not a destination. Continuously monitor and optimize your application.</p>
    `,
    date: "Mar 05, 2024",
    readTime: "6 min read",
    image: "https://nodejs.org/static/images/logo.svg", 
  },
];

const BlogCard = ({ index, title, excerpt, date, readTime, image, onClick }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary rounded-2xl overflow-hidden border border-white/10 w-full flex flex-col h-full"
  >
    <div className="relative h-[200px] overflow-hidden shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-center text-secondary text-xs mb-3">
        <span>{date}</span>
        <span>{readTime}</span>
      </div>
      
      <h3 className="text-white font-bold text-[20px] mb-3 line-clamp-2">{title}</h3>
      <p className="text-secondary text-[14px] line-clamp-3 mb-4 flex-1">{excerpt}</p>
      
      <button 
        onClick={onClick}
        className="text-white text-[14px] font-medium hover:text-purple-400 transition-colors flex items-center gap-2 mt-auto"
      >
        Read More
        <span className="text-lg">→</span>
      </button>
    </div>
  </motion.div>
);

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-tertiary p-8 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
        >
          <CloseIcon />
        </button>

        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-64 object-cover rounded-xl mb-6"
        />

        <div className="flex justify-between items-center text-secondary text-sm mb-4">
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{blog.title}</h2>
        
        <div 
          className="text-gray-300 leading-relaxed text-lg space-y-4"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />
        
        <div className="mt-8 pt-6 border-t border-white/10">
            <button 
                onClick={onClose}
                className="bg-white text-primary px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
                Close Article
            </button>
        </div>

      </motion.div>
    </motion.div>
  );
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary font-medium tracking-wider text-sm uppercase mb-2">Thoughts & Insights</p>
        <h2 className="text-white text-4xl md:text-6xl font-black">Blogs.</h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <BlogCard 
            key={`blog-${index}`} 
            index={index} 
            {...blog} 
            onClick={() => setSelectedBlog(blog)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedBlog && (
          <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");
