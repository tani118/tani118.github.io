import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "ProGo",
      description: "A beautifully designed web application to find the ideal github repository for you, tailored to your tech stack.",
      github: "https://github.com/tani118/progo-repository-finder",
      live: "https://progo-414cf.web.app/"
    },
    {
      title: "Study Buddy",
      description: "An AI & RAG Powered Application designed to help you score the highest in class by giving you practice questions, flashcards and a dedicated chatbot with data of your books",
      github: "https://github.com/tani118/Study-Buddy",
      live: "https://studybuddy-681c2.web.app/"
    },
    {
      title: "Facebook Agent Dashboard",
      description: "A comprehensive dashboard for managing Facebook automation agents with centralised messaging and commenting across all posts and messenger DMs",
      github: "https://github.com/tani118/facebook-agent-dashboard",
      live: "https://facebook-agent-dashboard-2.vercel.app/"
    },
    {
      title: "RSA - Simulator",
      description: `RSA Simulator is an interactive tool demonstrating the RSA cryptosystem's principles, allowing users to visualize encryption and decryption processes through public and private key operations.`,
      github: "https://github.com/tani118/RSA-simulator",
      live: null
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills.",
      github: "https://github.com/username/portfolio",
      live: "http://lakshyabhutani.me/"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold italic mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group border-b border-sepia-900/10 dark:border-sepia-100/10 pb-8 last:border-0 cursor-pointer"
            onClick={(e) => {
              // Don't trigger if clicking directly on the action links
              if (e.target.tagName === 'A') return;
              const link = project.live || project.github;
              if (link) window.open(link, '_blank');
            }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
              <h3 className="text-2xl font-bold italic group-hover:text-sepia-600 dark:group-hover:text-sepia-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-4 mt-2 md:mt-0 font-serif italic text-sm opacity-60">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2 hover:text-sepia-900 dark:hover:text-sepia-100"
                  >
                    [github]
                  </a>
                )}
                
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2 hover:text-sepia-900 dark:hover:text-sepia-100"
                  >
                    [live]
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-lg leading-relaxed opacity-80 font-serif">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
