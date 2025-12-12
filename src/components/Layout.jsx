import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check system preference or local storage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  const navItems = [
    { name: 'About Me', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
  ];

  return (
    <div className="min-h-screen bg-sepia-100 dark:bg-sepia-900 text-sepia-900 dark:text-sepia-100 transition-colors duration-500 font-serif flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0 md:h-screen md:sticky md:top-0 p-6 border-b md:border-b-0 md:border-r border-sepia-900/10 dark:border-sepia-100/10 flex flex-col justify-between bg-sepia-100/50 dark:bg-sepia-900/50 backdrop-blur-sm">
        <div>
          <div className="mb-8 md:mb-12 flex justify-between items-center md:block">
            <div className="font-bold text-xl italic md:mb-2">LB.</div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-sepia-200 dark:hover:bg-sepia-800 transition-colors md:hidden"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>
          </div>

          <nav className="flex flex-row md:flex-col gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/about') || (item.path === '/blogs' && location.pathname.startsWith('/blog'));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg italic hover:text-sepia-600 dark:hover:text-sepia-300 transition-colors whitespace-nowrap ${
                    isActive ? 'font-bold border-b-2 md:border-b-0 md:border-l-4 border-sepia-600 dark:border-sepia-300 md:pl-3' : 'md:pl-3 md:border-l-4 md:border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex flex-col gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm italic opacity-60 hover:opacity-100 transition-opacity"
          >
            {darkMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                Light Mode
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                Dark Mode
              </>
            )}
          </button>
        </div>
      </aside>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-8 md:py-12 w-full animate-fade-in overflow-y-auto h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
