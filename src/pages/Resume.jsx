import React from 'react';

const Resume = () => {
  return (
    <div className="h-[80vh] w-full border-2 border-sepia-900/10 dark:border-sepia-100/10 rounded-sm p-1 bg-white dark:bg-sepia-800">
      <iframe
        src="https://drive.google.com/file/d/1YBsQmrmRvj-RP6hMWihjpmhm1ANDatna/preview"
        width="100%"
        height="100%"
        className="rounded-sm"
        title="Resume"
      ></iframe>
      <div className="mt-4 text-center">
        <a 
          href="https://drive.google.com/file/d/1YBsQmrmRvj-RP6hMWihjpmhm1ANDatna/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 border border-sepia-900 dark:border-sepia-100 hover:bg-sepia-900 hover:text-sepia-100 dark:hover:bg-sepia-100 dark:hover:text-sepia-900 transition-colors italic"
        >
          Open in New Tab
        </a>
      </div>
    </div>
  );
};

export default Resume;
