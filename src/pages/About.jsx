import React from 'react';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '../components/Icons';

const About = () => {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold italic mb-2">Lakshya Bhutani</h1>
        <p className="text-xl md:text-2xl opacity-80 italic">
          Developer, Designer, & Tech Enthusiast
        </p>
        
        <div className="flex flex-wrap gap-6 items-center mt-4">
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
          <a href="mailto:lakshyabhutani2004p@gmail.com" className="font-mono text-sm md:text-base hover:underline underline-offset-4">
            lakshyabhutani2004p@gmail.com
          </a>
        </div>
      </section>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          <span className="font-bold text-xl mr-2">›</span>
          I <span className="italic font-bold">love</span> tech and design.
        </p>
        <p>
          <span className="font-bold text-xl mr-2">›</span>
          4th Year CSE undergrad at Jaypee Institute of Information Technology, Noida.
        </p>
        <p>
          <span className="font-bold text-xl mr-2">›</span>
          Worked for <span className="font-bold">Government of India</span> @ Ministry of Electronics and Information Technology.
        </p>
        <p>
          <span className="font-bold text-xl mr-2">›</span>
          Frontend Developer Intern @ Qrencia Skills.
        </p>
        <p>
          <span className="font-bold text-xl mr-2">›</span>
          AWS Cloud Practitioner.
        </p>
      </section>

      <section className="pt-8 border-t border-sepia-900/10 dark:border-sepia-100/10">
        <h2 className="text-2xl font-bold italic mb-6">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
          <div>
            <h3 className="font-bold mb-2 underline decoration-sepia-400">Languages</h3>
            <ul className="space-y-1 opacity-80">
              <li>C++</li>
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>SQL</li>
              <li>HTML / CSS</li>
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
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
