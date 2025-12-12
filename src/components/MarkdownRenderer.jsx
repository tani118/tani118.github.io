import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
// Import a dark theme that works well with our terminal aesthetic
import 'highlight.js/styles/atom-one-dark.css';
import './MarkdownRenderer.css';

const MarkdownRenderer = ({ blog, onClose, isHovered, showBackToAllBlogs, onBackToAllBlogs }) => {
  useEffect(() => {
    // Disable background scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Copy to clipboard function for code blocks
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transition-colors duration-300 ${
      isHovered ? 'bg-[#FFB5C0]' : 'bg-black'
    }`}>
      <div className="h-full overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Header with close button */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className={`font-serif italic text-lg transition-colors duration-300 hover:underline ${
                  isHovered ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'
                }`}
              >
                ← Back to {showBackToAllBlogs ? 'All Blogs' : 'Home'}
              </button>
              
              {!showBackToAllBlogs && onBackToAllBlogs && (
                <button
                  onClick={onBackToAllBlogs}
                  className={`font-serif italic text-sm px-3 py-1 border transition-all duration-300 ${
                    isHovered 
                      ? 'border-gray-400 text-black hover:bg-black hover:text-white' 
                      : 'border-gray-600 text-white hover:bg-white hover:text-black'
                  }`}
                >
                  View All Blogs
                </button>
              )}
            </div>
            
            <div className={`font-serif italic text-sm transition-colors duration-300 ${
              isHovered ? 'text-gray-700' : 'text-gray-400'
            }`}>
              {blog.date}
            </div>
          </div>

          {/* Blog content */}
          <article className={`markdown-content prose prose-lg max-w-none transition-colors duration-300 font-serif italic ${
            isHovered 
              ? 'light-theme prose-headings:text-black prose-p:text-gray-800 prose-strong:text-black prose-em:text-gray-700' 
              : 'dark-theme prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-em:text-gray-400'
          }`}>
            <h1 className={`font-serif italic text-4xl font-bold mb-8 transition-colors duration-300 ${
              isHovered ? 'text-black' : 'text-white'
            }`}>
              {blog.title}
            </h1>
            
            <div className={`leading-relaxed transition-colors duration-300 ${
              isHovered ? 'text-gray-800' : 'text-gray-300'
            }`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkEmoji]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                // Custom styling for different elements
                h1: ({children}) => (
                  <h1 className={`font-serif italic text-3xl font-bold mb-6 mt-8 transition-colors duration-300 ${
                    isHovered ? 'text-black' : 'text-white'
                  }`}>{children}</h1>
                ),
                h2: ({children}) => (
                  <h2 className={`font-serif italic text-2xl font-bold mb-4 mt-8 transition-colors duration-300 ${
                    isHovered ? 'text-black' : 'text-white'
                  }`}>{children}</h2>
                ),
                h3: ({children}) => (
                  <h3 className={`font-serif italic text-xl font-bold mb-4 mt-6 transition-colors duration-300 ${
                    isHovered ? 'text-black' : 'text-white'
                  }`}>{children}</h3>
                ),
                p: ({children}) => (
                  <p className={`font-serif italic mb-4 leading-relaxed transition-colors duration-300 ${
                    isHovered ? 'text-gray-800' : 'text-gray-300'
                  }`}>{children}</p>
                ),
                code: ({inline, className, children, ...props}) => {
                  if (inline) {
                    return (
                      <code 
                        className={`px-2 py-1 rounded font-serif italic text-sm transition-colors duration-300 ${
                          isHovered 
                            ? 'bg-gray-200 text-gray-800' 
                            : 'bg-gray-800 text-gray-200'
                        }`}
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                pre: ({children}) => {
                  // Extract the code content for copying
                  const codeContent = children?.props?.children || '';
                  
                  return (
                    <div className="relative group">
                      <pre className={`p-4 rounded-lg overflow-x-auto font-serif italic text-sm my-6 transition-colors duration-300 border ${
                        isHovered 
                          ? 'bg-gray-100 border-gray-300 [&_code]:!bg-gray-100 [&_code]:!text-gray-800' 
                          : 'bg-gray-900 border-gray-700 [&_code]:!bg-gray-900 [&_code]:!text-gray-200'
                      }`}>
                        {children}
                      </pre>
                      <button
                        onClick={() => copyToClipboard(codeContent)}
                        className={`absolute top-2 right-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                          isHovered 
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                        title="Copy to clipboard"
                      >
                        Copy
                      </button>
                    </div>
                  );
                },
                img: ({src, alt, title}) => (
                  <div className="my-8">
                    <img 
                      src={src} 
                      alt={alt} 
                      title={title}
                      className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
                      style={{ maxHeight: '70vh' }}
                    />
                    {alt && (
                      <p className={`text-center mt-2 text-sm font-serif italic transition-colors duration-300 ${
                        isHovered ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {alt}
                      </p>
                    )}
                  </div>
                ),
                a: ({href, children}) => (
                  <a 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`underline transition-colors duration-300 ${
                      isHovered 
                        ? 'text-blue-600 hover:text-blue-800' 
                        : 'text-blue-400 hover:text-blue-200'
                    }`}
                  >
                    {children}
                  </a>
                ),
                blockquote: ({children}) => (
                  <blockquote className={`border-l-4 pl-4 my-6 italic transition-colors duration-300 ${
                    isHovered 
                      ? 'border-gray-400 text-gray-700' 
                      : 'border-gray-600 text-gray-400'
                  }`}>
                    {children}
                  </blockquote>
                ),
                ul: ({children}) => (
                  <ul className={`list-disc list-outside ml-6 mb-4 space-y-2 transition-colors duration-300 ${
                    isHovered ? 'text-gray-800' : 'text-gray-300'
                  }`}>
                    {children}
                  </ul>
                ),
                ol: ({children}) => (
                  <ol className={`list-decimal list-outside ml-6 mb-4 space-y-2 transition-colors duration-300 ${
                    isHovered ? 'text-gray-800' : 'text-gray-300'
                  }`}>
                    {children}
                  </ol>
                ),
                li: ({children}) => (
                  <li className="font-serif italic pl-1">
                    {children}
                  </li>
                ),
                table: ({children}) => (
                  <div className="overflow-x-auto my-6 rounded-lg border transition-colors duration-300">
                    <table className={`min-w-full transition-colors duration-300 ${
                      isHovered 
                        ? 'border-gray-300' 
                        : 'border-gray-700'
                    }`}>
                      {children}
                    </table>
                  </div>
                ),
                th: ({children}) => (
                  <th className={`border px-4 py-3 font-serif italic font-bold text-left transition-colors duration-300 ${
                    isHovered 
                      ? 'border-gray-300 bg-gray-50 text-black' 
                      : 'border-gray-700 bg-gray-800 text-white'
                  }`}>
                    {children}
                  </th>
                ),
                td: ({children}) => (
                  <td className={`border px-4 py-3 font-serif italic transition-colors duration-300 ${
                    isHovered 
                      ? 'border-gray-300 text-gray-800 even:bg-gray-50' 
                      : 'border-gray-700 text-gray-300 even:bg-gray-800/30'
                  }`}>
                    {children}
                  </td>
                ),
                hr: () => (
                  <hr className={`my-8 transition-colors duration-300 ${
                    isHovered ? 'border-gray-300' : 'border-gray-700'
                  }`} />
                )
              }}
            >
              {blog.content}
            </ReactMarkdown>
            </div>
          </article>

          {/* Footer */}
          <div className={`mt-12 pt-8 border-t transition-colors duration-300 ${
            isHovered ? 'border-gray-300' : 'border-gray-700'
          }`}>
            <div className={`font-serif italic text-sm transition-colors duration-300 ${
              isHovered ? 'text-gray-700' : 'text-gray-400'
            }`}>
              Thanks for reading! Feel free to reach out if you have any questions or thoughts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownRenderer;
