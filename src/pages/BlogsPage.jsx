import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github.css'; // Use a lighter theme for code blocks

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [error, setError] = useState(null);
  const { blogId } = useParams();
  const navigate = useNavigate();

  const GITHUB_API = 'https://api.github.com/repos/tani118/my-blogs/contents';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(GITHUB_API);
        if (!response.ok) throw new Error('Failed to fetch blogs');
        
        const data = await response.json();
        
        // Filter for markdown files and sort them to ensure consistent IDs
        const markdownFiles = data
          .filter(file => file.name.endsWith('.md'))
          .sort((a, b) => a.name.localeCompare(b.name));
        
        const blogPromises = markdownFiles.map(async (file, index) => {
          const contentRes = await fetch(file.download_url);
          const content = await contentRes.text();
          
          // Simple metadata extraction (assuming frontmatter or first lines)
          // This is a basic implementation, you might want to use a proper frontmatter parser
          const titleMatch = content.match(/^#\s+(.+)$/m);
          const title = titleMatch ? titleMatch[1] : file.name.replace('.md', '');
          const slug = file.name.replace('.md', '');
          
          // Remove title from preview
          const contentWithoutTitle = content.replace(/^#\s+.+$/m, '');
          const preview = contentWithoutTitle.slice(0, 150).replace(/[#*`]/g, '') + '...';
          
          return {
            id: index + 1,
            slug,
            title,
            content,
            preview,
            date: new Date().toLocaleDateString(), // You might want to fetch commit date
            download_url: file.download_url
          };
        });

        const fetchedBlogs = await Promise.all(blogPromises);
        setBlogs(fetchedBlogs);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (!loading && blogs.length > 0) {
      if (blogId) {
        const blog = blogs.find(b => String(b.id) === blogId);
        if (blog) {
          setSelectedBlog(blog);
        } else {
          // Handle 404 or redirect
          navigate('/blogs');
        }
      } else {
        setSelectedBlog(null);
      }
    }
  }, [blogId, blogs, loading, navigate]);

  if (loading) {
    return <div className="text-center italic opacity-60 mt-20">Loading thoughts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 italic mt-20">{error}</div>;
  }

  if (selectedBlog) {
    return (
      <div className="animate-fade-in">
        <button 
          onClick={() => navigate('/blogs')}
          className="mb-8 text-sm italic hover:underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
        >
          ← Back to all blogs
        </button>
        
        <article className="prose prose-sepia dark:prose-invert max-w-none font-serif">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm, remarkEmoji]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold italic mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold italic mt-8 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold italic mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 leading-relaxed opacity-90" {...props} />,
              a: ({node, ...props}) => <a className="underline underline-offset-2 hover:text-sepia-600 dark:hover:text-sepia-400" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-sepia-400 pl-4 italic opacity-80 my-4" {...props} />,
              code: ({node, inline, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <div className="my-4 rounded overflow-hidden text-sm">
                    <code className={className} {...props}>
                      {children}
                    </code>
                  </div>
                ) : (
                  <code className="bg-sepia-200 dark:bg-sepia-800 px-1 py-0.5 rounded text-sm font-serif italic" {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {selectedBlog.content}
          </ReactMarkdown>
        </article>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold italic mb-8">Writings</h1>
      
      <div className="space-y-12">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="group cursor-pointer"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <h2 className="text-2xl font-bold italic mb-2 group-hover:text-sepia-600 dark:group-hover:text-sepia-400 transition-colors">
              {blog.title}
            </h2>
            <div className="text-sm opacity-50 mb-3 italic font-serif">{blog.date}</div>
            <p className="opacity-80 leading-relaxed font-serif">
              {blog.preview}
            </p>
            <div className="mt-4">
              <span className="text-sm italic underline underline-offset-4 opacity-60 group-hover:opacity-100 transition-opacity">
                <br></br>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
