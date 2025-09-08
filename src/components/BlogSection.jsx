import { useState, useEffect } from 'react';
import BlogStrip from './BlogStrip.jsx';
import MarkdownRenderer from './MarkdownRenderer.jsx';

const BlogSection = ({ isHovered, onViewChange }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  // GitHub API configuration for private repo
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Store in .env file
  const GITHUB_API = 'https://api.github.com/repos/tani118/my-blogs/contents';

  // Notify parent component about view changes
  useEffect(() => {
    if (onViewChange) {
      onViewChange({
        showAllBlogs,
        selectedBlog: !!selectedBlog
      });
    }
  }, [showAllBlogs, selectedBlog, onViewChange]);

  // Sample blogs for fallback
  const sampleBlogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      preview: "A comprehensive guide to understanding and implementing React Hooks in your applications. Learn useState, useEffect, and custom hooks...",
      content: `# Getting Started with React Hooks

React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class component.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 and have become the standard way to write React components.

### useState Hook

The \`useState\` hook lets you add state to functional components:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect Hook

The \`useEffect\` hook lets you perform side effects in function components:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Hook Rules

> **Important**: There are two important rules when using hooks:
> 
> 1. Only call hooks at the top level of your React function
> 2. Only call hooks from React function components or custom hooks

## Benefits of Hooks

- **Simpler code**: No need for class components
- **Better reusability**: Custom hooks allow sharing stateful logic
- **Easier testing**: Function components are easier to test
- **Better performance**: React can optimize function components better

Happy coding with React Hooks! 🚀`,
      date: "2024-03-20",
      type: 'blog'
    },
    {
      id: 2,
      title: "AWS Cloud Architecture Best Practices",
      preview: "Explore essential AWS services and learn how to design scalable, secure, and cost-effective cloud architectures...",
      content: `# AWS Cloud Architecture Best Practices

Building robust applications on AWS requires understanding core principles and following established best practices. This guide covers essential patterns for designing scalable, secure, and cost-effective cloud architectures.

![AWS Architecture Diagram](https://via.placeholder.com/800x400/232323/FFB5C0?text=AWS+Architecture+Example)
*Example of a typical AWS architecture with multiple availability zones*

## Core Design Principles

### 1. Design for Failure
Everything will eventually fail, so design your system to handle failures gracefully:

- Use multiple **Availability Zones**
- Implement **auto-scaling** groups
- Set up **health checks** and monitoring
- Plan for **disaster recovery**

### 2. Implement Security in Layers

| Layer | Security Measures |
|-------|------------------|
| Network | VPC, Security Groups, NACLs |
| Application | IAM, API Gateway, WAF |
| Data | Encryption at rest and in transit |
| Infrastructure | CloudTrail, Config, GuardDuty |

### 3. Leverage Automation

Automate everything you can:

\`\`\`bash
# Example: AWS CLI command to create an S3 bucket
aws s3 mb s3://my-secure-bucket --region us-west-2

# Configure bucket encryption
aws s3api put-bucket-encryption \\
  --bucket my-secure-bucket \\
  --server-side-encryption-configuration '{
    "Rules": [{
      "ApplyServerSideEncryptionByDefault": {
        "SSEAlgorithm": "AES256"
      }
    }]
  }'
\`\`\`

## Essential AWS Services

### Compute Services
- **EC2**: Virtual machines in the cloud
- **Lambda**: Serverless compute
- **ECS/EKS**: Container orchestration
- **Elastic Beanstalk**: Platform as a Service

### Storage Services
- **S3**: Object storage
- **EBS**: Block storage for EC2
- **EFS**: Managed file system
- **Glacier**: Long-term archival

### Database Services
- **RDS**: Managed relational databases
- **DynamoDB**: NoSQL database
- **ElastiCache**: In-memory caching
- **Redshift**: Data warehousing

## Architecture Patterns

### Microservices Architecture
Break down monolithic applications into smaller, manageable services:

\`\`\`yaml
# Example: Docker Compose for microservices
version: '3.8'
services:
  user-service:
    image: user-service:latest
    ports:
      - "3001:3000"
  
  order-service:
    image: order-service:latest
    ports:
      - "3002:3000"
  
  api-gateway:
    image: nginx:latest
    ports:
      - "80:80"
\`\`\`

### Event-Driven Architecture
Use events to decouple services and improve scalability:

- **SNS**: Simple Notification Service
- **SQS**: Simple Queue Service  
- **EventBridge**: Event bus service
- **Kinesis**: Real-time data streaming

## Cost Optimization Tips

1. **Right-size your instances** - Don't over-provision
2. **Use Reserved Instances** for predictable workloads
3. **Implement auto-scaling** to handle traffic spikes
4. **Regular cost reviews** using Cost Explorer
5. **Tag everything** for better cost allocation

---

Remember: Good architecture is not about using the latest technology, but about solving business problems efficiently and reliably.`,
      date: "2024-03-18",
      type: 'blog'
    },
    {
      id: 3,
      title: "Modern JavaScript Features You Should Know",
      preview: "Stay up-to-date with the latest JavaScript features including async/await, destructuring, and ES modules...",
      content: `# Modern JavaScript Features You Should Know 🚀

JavaScript continues to evolve rapidly, with new features being added regularly. Here are some essential modern JavaScript features that every developer should master.

![JavaScript Logo](https://via.placeholder.com/400x200/F7DF1E/000000?text=JavaScript+ES6%2B)

## Progress Checklist 📋

Here's what we'll cover in this guide:

- [x] Arrow Functions ✅
- [x] Destructuring Assignment ✅  
- [x] Template Literals ✅
- [x] Spread Operator ✅
- [x] Async/Await ✅
- [x] ES Modules ✅
- [x] Optional Chaining & Nullish Coalescing ✅
- [ ] Advanced Patterns (coming soon) 🔄

## ES6+ Features 🎯

### 1. Arrow Functions ➡️

Arrow functions provide a more concise syntax for writing functions:

\`\`\`javascript
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function - much cleaner! ✨
const add = (a, b) => a + b;

// Arrow function with block body
const multiply = (a, b) => {
  const result = a * b;
  console.log(\`Result: \${result}\`); // 📊
  return result;
};
\`\`\`

### 2. Destructuring Assignment 🎯

Extract values from arrays or properties from objects:

\`\`\`javascript
// Array destructuring 📚
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Object destructuring 🏗️
const person = { 
  name: 'John', 
  age: 30, 
  city: 'New York',
  hobbies: ['coding', 'reading'] 
};

const { name, age, hobbies } = person;
console.log(\`\${name} is \${age} years old\`); // 👤

// Destructuring with renaming 🏷️
const { name: fullName, age: years } = person;
\`\`\`

### 3. Template Literals 📝

Use backticks for string interpolation and multiline strings:

\`\`\`javascript
const name = 'World';
const emoji = '🌍';

const greeting = \`Hello, \${name}! \${emoji}
This is a multiline string
with embedded expressions: \${2 + 3} = 5 🧮
Current time: \${new Date().toLocaleTimeString()} ⏰\`;

console.log(greeting);
\`\`\`

### 4. Spread Operator 🌟

Expand arrays, objects, or function arguments:

\`\`\`javascript
// Array spread 📋
const fruits = ['🍎', '🍌', '🍊'];
const vegetables = ['🥕', '🥬', '🥒'];
const food = [...fruits, ...vegetables, '🍕']; 

// Object spread 📦
const baseConfig = { 
  theme: 'dark', 
  language: 'en',
  notifications: true 
};
const userConfig = { 
  ...baseConfig, 
  theme: 'light', // Override theme 🎨
  username: 'john_doe'
}; 

// Function arguments 🔧
function celebrate(event, ...guests) {
  console.log(\`🎉 \${event} with \${guests.join(', ')}\`);
}

const partyGuests = ['Alice', 'Bob', 'Charlie'];
celebrate('Birthday Party', ...partyGuests);
\`\`\`

## Async/Await 🔄

Handle asynchronous operations more elegantly:

\`\`\`javascript
// Promise-based approach (old way) 😵‍💫
function fetchUserOld(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(response => response.json())
    .then(user => {
      console.log('User loaded! 👤', user);
      return user;
    })
    .catch(error => {
      console.error('Error loading user! ❌', error);
    });
}

// Async/await approach (modern way) ✨
async function fetchUser(id) {
  try {
    console.log('Loading user... ⏳');
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    console.log('User loaded! ✅', user);
    return user;
  } catch (error) {
    console.error('Error loading user! ❌', error);
    throw error; // Re-throw for caller to handle
  }
}

// Using with error handling 🛡️
async function displayUser(userId) {
  try {
    const user = await fetchUser(userId);
    document.getElementById('user-name').textContent = \`👋 \${user.name}\`;
  } catch {
    document.getElementById('user-name').textContent = '❌ Failed to load user';
  }
}
\`\`\`

## ES Modules 📚

Import and export functionality between files:

\`\`\`javascript
// math.js 🧮
export const PI = 3.14159;
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Default export 🎯
export default function multiply(a, b) {
  return a * b;
}

// utils.js 🛠️
export const formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;
export const generateId = () => \`id_\${Math.random().toString(36).substr(2, 9)}\`;

// main.js 🚀
import multiply, { add, subtract, PI } from './math.js';
import * as utils from './utils.js';

console.log(\`PI = \${PI} 🥧\`);
console.log(\`2 + 3 = \${add(2, 3)} ➕\`);
console.log(\`Price: \${utils.formatCurrency(19.99)} 💰\`);
\`\`\`

## Optional Chaining & Nullish Coalescing 🔗

Safely access nested properties and provide default values:

\`\`\`javascript
// Sample data structure 📊
const user = {
  name: 'John',
  profile: {
    avatar: '👨‍💻',
    social: {
      twitter: '@john_doe'
    }
  },
  preferences: {
    theme: 'dark',
    notifications: true
  }
};

// Optional chaining (?.) - Safe navigation! 🛡️
console.log(user.profile?.avatar); // '👨‍💻'
console.log(user.profile?.social?.twitter); // '@john_doe'
console.log(user.profile?.social?.linkedin); // undefined (no error!)
console.log(user.work?.company?.name); // undefined (no error!)

// Method chaining with optional chaining 🔗
user.preferences?.getTheme?.(); // Won't crash if getTheme doesn't exist

// Nullish coalescing (??) - Smart defaults! 🎯
const defaultTheme = null ?? 'light'; // 'light'
const userTheme = user.preferences?.theme ?? 'auto'; // 'dark'
const notifications = user.preferences?.notifications ?? false; // true

// Combining both for powerful patterns 💪
const displayName = user.profile?.displayName ?? user.name ?? 'Anonymous User';
const avatarUrl = user.profile?.avatar ?? '👤'; // Default avatar
\`\`\`

## Performance Comparison 📈

| Feature | Before | After | Benefits |
|---------|--------|-------|----------|
| Arrow Functions | \`function() {}\` | \`() => {}\` | Shorter syntax, lexical \`this\` 🎯 |
| Template Literals | String concatenation | \`\${variable}\` | Readable, multiline support 📝 |
| Destructuring | Manual extraction | \`const {a} = obj\` | Cleaner, less code 🧹 |
| Spread Operator | \`concat()\` methods | \`...array\` | More intuitive, flexible 🌟 |
| Async/Await | Promise chains | \`await\` syntax | Synchronous-looking async code 🔄 |
| Optional Chaining | Manual null checks | \`obj?.prop\` | Safer, shorter null checks 🛡️ |

## Best Practices 💡

> **Pro Tips for Modern JavaScript:**
> 
> 1. **Use \`const\` by default** - Only use \`let\` when reassignment is needed 🔒
> 2. **Prefer arrow functions** - But use regular functions for methods 🎯  
> 3. **Destructure in function parameters** - Makes APIs cleaner 🧹
> 4. **Use template literals** - Even for simple strings 📝
> 5. **Always handle async errors** - Use try/catch with async/await ⚠️
> 6. **Leverage optional chaining** - Reduce defensive programming 🛡️

## Quick Reference Card 📋

\`\`\`javascript
// Modern JavaScript Cheatsheet 🚀

// Variables & Functions
const name = 'JavaScript';
const greet = (name) => \`Hello, \${name}! 👋\`;

// Destructuring
const [a, b] = [1, 2];
const {x, y} = {x: 10, y: 20};

// Spread & Rest
const arr = [...oldArr, newItem];
const obj = {...oldObj, newProp: 'value'};
const func = (...args) => args.length;

// Async/Await
const data = await fetch('/api').then(r => r.json());

// Optional Chaining
const value = obj?.prop?.subProp ?? 'default';

// Modules
import { feature } from './module.js';
export const myFeature = () => 'exported! 📤';
\`\`\`

---

These features have become essential tools in modern JavaScript development. Master them to write cleaner, more efficient, and more maintainable code! ⚡✨

*Happy coding! 🎉 Remember: the best code is code that's easy to read and understand! 📖*`,
      date: "2024-03-15",
      type: 'blog'
    }
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Starting blog loading process...');
        
        // Fetch blogs from GitHub
        console.log('Fetching blogs from GitHub...');
        await fetchBlogs();
        
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        console.log('Blog loading complete');
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        console.log('GitHub Token:', GITHUB_TOKEN ? 'Token found' : 'Token missing');
        
        const response = await fetch(GITHUB_API, {
          headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const files = await response.json();
        console.log('Files found:', files.length); // Debug log
        const markdownFiles = files.filter(file => file.name.endsWith('.md') && file.name !== 'README.md');
        console.log('Markdown files:', markdownFiles.map(f => f.name)); // Debug log
        
        // Fetch content for each markdown file with better error handling
        const blogPromises = markdownFiles.map(async (file, index) => {
          try {
            console.log(`Fetching blog ${index + 1}/${markdownFiles.length}: ${file.name}`);
            
            // Add a small delay to avoid rate limiting
            if (index > 0) {
              await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            const contentResponse = await fetch(`https://api.github.com/repos/tani118/my-blogs/contents/${file.name}`, {
              headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
              },
            });
            
            if (!contentResponse.ok) {
              console.error(`Failed to fetch ${file.name}: ${contentResponse.status}`);
              throw new Error(`Failed to fetch ${file.name}: ${contentResponse.status}`);
            }
            
            const contentData = await contentResponse.json();
            
            // Check if content is properly encoded
            if (!contentData.content) {
              console.error(`No content found for ${file.name}`);
              return null;
            }
            
            // Decode base64 content
            let content;
            try {
              content = atob(contentData.content.replace(/\s/g, ''));
            } catch (decodeError) {
              console.error(`Failed to decode content for ${file.name}:`, decodeError);
              return null;
            }
            
            // Extract title from filename
            const title = file.name.replace('.md', '').replace(/-/g, ' ');
            
            // Extract preview from content (first paragraph)
            const preview = content.split('\n').find(line => 
              line.trim() && !line.startsWith('#')
            ) || 'No preview available';

            const blog = {
              id: file.sha,
              title: title.charAt(0).toUpperCase() + title.slice(1),
              preview: preview.substring(0, 150) + '...',
              content,
              date: new Date().toISOString().split('T')[0],
              type: 'blog'
            };
            
            console.log(`Successfully fetched: ${blog.title}`);
            return blog;
          } catch (error) {
            console.error(`Error fetching content for ${file.name}:`, error);
            return null; // Return null for failed fetches
          }
        });

        console.log('Waiting for all blog promises to resolve...');
        const blogData = await Promise.all(blogPromises);
        console.log('Blog promises resolved:', blogData.length);
        
        // Filter out any failed fetches (null values)
        const validBlogs = blogData.filter(blog => blog !== null);
        console.log('Valid blogs found:', validBlogs.length);
        console.log('Blog titles:', validBlogs.map(b => b.title));
        
        if (validBlogs.length === 0) {
          console.warn('No valid blogs found, using sample data');
          setBlogs(sampleBlogs);
        } else {
          setBlogs(validBlogs);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Fallback to sample data
        console.log('Using sample blogs as fallback');
        setBlogs(sampleBlogs);
      }
    };

    loadData();
  }, []);

  const BlogList = () => (
    <section className="mt-40">
      <h2 className={`font-mono text-4xl font-bold mb-16 transition-colors duration-300 ${
        isHovered ? 'text-black' : 'text-white'
      }`}>
        All Blogs
      </h2>
      
      <div className={`flex justify-between items-center mb-4`}>
        <div className={`font-mono text-sm ${isHovered ? 'text-gray-600' : 'text-gray-400'}`}>
          {blogs.length} blog posts found
        </div>
        <button
          onClick={() => setShowAllBlogs(false)}
          className={`font-mono text-sm px-4 py-2 border transition-all duration-300 ${
            isHovered 
              ? 'border-gray-400 text-black hover:bg-black hover:text-white' 
              : 'border-gray-600 text-white hover:bg-white hover:text-black'
          }`}
        >
          ← Back to Home
        </button>
      </div>

      <div className="grid gap-6 mb-16">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
            className={`p-6 border-2 cursor-pointer transition-all duration-300 group ${
              isHovered 
                ? 'border-gray-400 bg-white/5 hover:bg-black hover:border-white' 
                : 'border-gray-600 bg-gray-900/30 hover:bg-white hover:border-black'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className={`font-mono text-xl font-semibold transition-colors duration-300 ${
                isHovered ? 'text-black group-hover:text-white' : 'text-white group-hover:text-black'
              }`}>
                {blog.title}
              </h2>
              <span className={`font-mono text-xs px-2 py-1 border transition-colors duration-300 ${
                isHovered 
                  ? 'border-blue-600 text-blue-600 group-hover:border-blue-400 group-hover:text-blue-400' 
                  : 'border-blue-400 text-blue-400 group-hover:border-blue-600 group-hover:text-blue-600'
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
                Read full post →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  if (selectedBlog) {
    return (
      <MarkdownRenderer 
        blog={selectedBlog} 
        onClose={() => setSelectedBlog(null)}
        isHovered={isHovered}
        showBackToAllBlogs={showAllBlogs}
        onBackToAllBlogs={() => {
          setSelectedBlog(null);
          if (!showAllBlogs) {
            setShowAllBlogs(true);
          }
        }}
      />
    );
  }

  if (showAllBlogs) {
    return <BlogList />;
  }

  return (
    <section className="mt-40">
      <h2 className={`font-mono text-4xl font-bold mb-16 transition-colors duration-300 ${
        isHovered ? 'text-black' : 'text-white'
      }`}>
        Blog
      </h2>
      
      {loading ? (
        <div className={`font-mono text-xl ${isHovered ? 'text-black' : 'text-white'}`}>
          Loading blogs...
        </div>
      ) : (
        <>
          <div className={`flex justify-between items-center mb-4`}>
            <div className={`font-mono text-sm ${isHovered ? 'text-gray-600' : 'text-gray-400'}`}>
              {blogs.length} blog posts found
            </div>
            <button
              onClick={() => setShowAllBlogs(true)}
              className={`font-mono text-sm px-4 py-2 border transition-all duration-300 ${
                isHovered 
                  ? 'border-gray-400 text-black hover:bg-black hover:text-white' 
                  : 'border-gray-600 text-white hover:bg-white hover:text-black'
              }`}
            >
              Show All Blogs →
            </button>
          </div>
          <BlogStrip 
            blogs={blogs}
            onBlogClick={(blog) => {
              console.log('BlogStrip onBlogClick called with:', blog.title);
              setSelectedBlog(blog);
            }}
            isHovered={isHovered}
          />
        </>
      )}
    </section>
  );
};

export default BlogSection;
