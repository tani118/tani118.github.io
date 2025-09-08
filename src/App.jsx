import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from './components/Icons.jsx'
import Projects from './components/Projects.jsx'
import BlogSection from './components/BlogSection.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [blogViewState, setBlogViewState] = useState({
    showAllBlogs: false,
    selectedBlog: false
  });

  // Calculate dynamic padding based on current view
  const getDynamicPadding = () => {
    if (blogViewState.showAllBlogs && !blogViewState.selectedBlog) {
      // When showing all blogs, use minimal padding since blog list manages its own spacing
      return 'pb-8';
    }
    if (blogViewState.selectedBlog) {
      // When showing individual blog, minimal padding since MarkdownRenderer is full-screen
      return 'pb-8';
    }
    // Default state - original spacing
    return 'pb-32';
  };

  return (

    <div className={`min-h-screen transition-colors duration-300 ${isHovered ? 'bg-[#FFB5C0]' : 'bg-black'}`}>
      <div className={`max-w-7xl mx-auto px-8 py-12 transition-all duration-300 ${getDynamicPadding()}`}>
        <header className='flex items-start justify-between gap-12'>
          <div className='flex-1'>
          <h1 className={`font-mono text-6xl pt-8 font-bold mb-6 transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
            Lakshya Bhutani
          </h1>
          <div className='flex gap-6 mt-6'>
            <a href="https://twitter.com/SDTani6" target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 transition-colors ${isHovered ? 'text-black' : 'text-white'}`}>
              <TwitterIcon />
            </a>
            
            <a href="https://github.com/tani118" target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 transition-colors ${isHovered ? 'text-black' : 'text-white'}`}>
              <GitHubIcon />
            </a>
            
            <a href="https://linkedin.com/in/lakshyabhutani" target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 transition-colors ${isHovered ? 'text-black' : 'text-white'}`}>
              <LinkedInIcon />
            </a>
            <pre className={`font-mono text-4xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`} style={{ marginTop: '-5px'}}> | </pre>
            <pre className={`font-mono text-3xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>lakshyabhutani2004p@gmail.com</pre>
          </div>
          </div>
      </header>

      <main className='max-w-7xl mx-auto '>
        <section className='mt-32'>
          <div className='space-y-6'>
            <p 
              className={`font-mono text-xl transition-colors duration-300 cursor-pointer ${isHovered ? 'text-black' : 'text-white'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              - I <span className={`${isHovered ? 'text-black' : 'text-white'}`}>love</span> tech and design.
            </p>
            <p className={`font-mono text-xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
              - 4th Year CSE undergrad at Jaypee Institute of Information Technology, Noida
            </p>
            <p className={`font-mono text-xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
              - Worked for <span className={`font-[1000] hover:transition-all duration-300 ease-in-out ${isHovered ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-blue-200'}`}>Government of India</span> @ Ministry of Electronics and Information Technology
            </p>
                                                <p className={`font-mono text-xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
              - Frontend Developer Intern @ Qrencia Skills
            </p>
                        <p className={`font-mono text-xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
              - AWS Cloud Practitioner
            </p>

        <p className={`font-mono text-xl transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
            - <a
                href="https://www.googledrive.com" 
                target='_blank'
                className={`inline-flex items-center gap-x-1 italic underline underline-offset-4 transition-colors duration-300 ${isHovered ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'}`}    > 
                Resume 
            </a>
        </p>
          </div>
        </section>
        <Projects isHovered={isHovered} />
        <BlogSection 
          isHovered={isHovered} 
          onViewChange={setBlogViewState}
        />
        <Contact isHovered={isHovered} />
      </main>



      </div>
    </div>
  )
}

export default App