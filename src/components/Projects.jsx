const Projects = ({ isHovered }) => {
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
    <section className="mt-40">
      <h2 className={`font-mono text-4xl font-bold mb-16 transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`border-2 p-6 transition-all duration-300 group ${
              isHovered 
                ? 'border-gray-400 bg-white/5 hover:bg-black hover:border-white' 
                : 'border-gray-600 bg-gray-900/30 hover:bg-white hover:border-black'
            }`}
          >
            <h3 className={`font-mono text-xl font-semibold mb-3 transition-colors duration-300 ${
              isHovered ? 'text-black group-hover:text-white' : 'text-white group-hover:text-black'
            }`}>
              {project.title}
            </h3>
            
            <p className={`font-mono text-sm leading-relaxed mb-4 transition-colors duration-300 ${
              isHovered ? 'text-gray-700 group-hover:text-gray-300' : 'text-gray-300 group-hover:text-gray-700'
            }`}>
              {project.description}
            </p>
            
            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-mono text-sm underline underline-offset-2 transition-colors duration-300 ${
                    isHovered 
                      ? 'text-gray-600 hover:text-gray-800' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  github
                </a>
              )}
              
              {project.live && (
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-mono text-sm underline underline-offset-2 transition-colors duration-300 ${
                    isHovered 
                      ? 'text-gray-600 hover:text-gray-800' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;