import React, { useState } from 'react';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../components/Icons';
import Photo from '../assets/Photo.jpeg';

const About = () => {
  const [isTechOpen, setIsTechOpen] = useState(false);

  return (
    <div className="space-y-12">
      <section className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-stretch justify-between">
        <div className="space-y-6 md:space-y-0 md:flex md:flex-col md:justify-center md:gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold italic mb-2">Lakshya Bhutani</h1>
            <p className="text-xl md:text-2xl opacity-80 italic">
              Developer & Designer 
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 items-center mt-4 md:mt-0">
            <a href="https://twitter.com/SDTani6" target="_blank" rel="noopener noreferrer" className="hover:text-sepia-600 dark:hover:text-sepia-400 transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="https://github.com/tani118" target="_blank" rel="noopener noreferrer" className="hover:text-sepia-600 dark:hover:text-sepia-400 transition-colors">
              <GitHubIcon className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/lakshyabhutani" target="_blank" rel="noopener noreferrer" className="hover:text-sepia-600 dark:hover:text-sepia-400 transition-colors">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <span className="hidden sm:inline text-sepia-400">|</span>
            <a href="mailto:lakshyabhutani2004p@gmail.com" className="font-serif italic text-lg md:text-base hover:underline underline-offset-4">
              lakshyabhutani2004p@gmail.com
            </a>
          </div>
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 overflow-hidden">
          <img src={Photo} alt="Lakshya Bhutani" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="text-lg leading-relaxed">
        <ul className="list-disc pl-6 space-y-7 marker:text-sepia-400">
          <li>
            I <span className="italic font-bold">love</span> tech and design.
          </li>
          <li>
            4th Year CSE undergrad at Jaypee Institute of Information Technology, Noida.
          </li>
          <li>
            Worked for <span className="font-bold italic">Government of India</span> at Ministry of Electronics and Information Technology.
          </li>
          <li>
            Frontend Developer Intern at Qrencia Skills.
          </li>
          <li>
            AWS Cloud Practitioner.
          </li>
        </ul>
      </section>

      <section className="pt-8 border-t border-sepia-900/10 dark:border-sepia-100/10">
        <button 
          onClick={() => setIsTechOpen(!isTechOpen)}
          className="flex items-center gap-3 text-2xl font-bold italic mb-6 hover:opacity-80 transition-opacity group w-full text-left"
        >
          Technologies
          <span className={`text-sm transform transition-transform duration-300 ${isTechOpen ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 font-serif italic text-sm transition-all duration-500 ease-in-out overflow-hidden ${isTechOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div>
            <h3 className="font-bold mb-2 underline decoration-sepia-400">Languages & Databases</h3>
            <ul className="space-y-1 opacity-80">
              <li>C & C++</li>
              <li>Python</li>
              <li>TypeScript</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 underline decoration-sepia-400">Frameworks & Libs</h3>
            <ul className="space-y-1 opacity-80">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 underline decoration-sepia-400">Tools & Cloud</h3>
            <ul className="space-y-1 opacity-80">
              <li>Git / GitHub</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Linux</li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
