import { useState, useEffect, useRef } from 'react';

const BlogStrip = ({ blogs, onBlogClick, isHovered }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stripRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  // Use only blogs for the strip
  const allItems = blogs.map(blog => ({ ...blog, type: blog.type || 'blog' }));

  useEffect(() => {
    if (stripRef.current && allItems.length > 0) {
      // Add a small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const stripElement = stripRef.current;
        if (stripElement) {
          const allChildren = Array.from(stripElement.children);
          const firstSetChildren = allChildren.slice(0, allItems.length);
          
          let totalWidth = 0;
          firstSetChildren.forEach(child => {
            totalWidth += child.offsetWidth;
          });
          
          if (totalWidth > 0) {
            setContentWidth(totalWidth);
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [allItems]);

  useEffect(() => {
    if (contentWidth === 0 || allItems.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        // Reset to 0 when we've scrolled through one complete set
        // This creates seamless infinite scrolling
        return newPosition >= contentWidth ? 0 : newPosition;
      });
    }, 30); // Slightly faster for smoother animation

    return () => clearInterval(interval);
  }, [contentWidth, allItems.length, isPaused]);

  const BlogCard = ({ blog }) => (
    <div 
      className={`w-80 mx-4 p-6 border-2 cursor-pointer transition-all duration-300 group flex-shrink-0 ${
        isHovered 
          ? 'border-gray-400 bg-white/5 hover:bg-black hover:border-white' 
          : 'border-gray-600 bg-gray-900/30 hover:bg-white hover:border-black'
      }`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Blog card clicked:', blog.title);
        onBlogClick(blog);
      }}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-mono text-lg font-semibold transition-colors duration-300 ${
          isHovered ? 'text-black group-hover:text-white' : 'text-white group-hover:text-black'
        }`}>
          {blog.title}
        </h3>
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isHovered ? 'text-blue-600 group-hover:text-blue-400' : 'text-blue-400 group-hover:text-blue-600'
        }`}>
          BLOG
        </span>
      </div>
      
      <p className={`font-mono text-sm leading-relaxed mb-4 transition-colors duration-300 ${
        isHovered ? 'text-gray-700 group-hover:text-gray-300' : 'text-gray-300 group-hover:text-gray-700'
      }`}>
        {blog.preview}
      </p>
      
      <div className="flex justify-between items-center">
        <span className={`font-mono text-xs transition-colors duration-300 ${
          isHovered ? 'text-gray-600 group-hover:text-gray-400' : 'text-gray-400 group-hover:text-gray-600'
        }`}>
          {blog.date}
        </span>
        <span className={`font-mono text-xs underline transition-colors duration-300 ${
          isHovered ? 'text-blue-600 group-hover:text-blue-400' : 'text-blue-400 group-hover:text-blue-600'
        }`}>
          Read more →
        </span>
      </div>
    </div>
  );

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ pointerEvents: 'auto' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        ref={stripRef}
        className="flex"
        style={{
          transform: `translateX(-${scrollPosition}px)`,
          transition: 'none',
          pointerEvents: 'auto', 
          position: 'relative',
          zIndex: 1
        }}
      >
        {allItems.map((item, index) => (
          <BlogCard key={`original-${item.type}-${item.id}-${index}`} blog={item} />
        ))}
        {allItems.map((item, index) => (
          <BlogCard key={`duplicate-${item.type}-${item.id}-${index}`} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogStrip;
