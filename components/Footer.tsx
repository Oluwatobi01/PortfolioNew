import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Oluwatobi. All rights reserved.
        </p>
        <p className="text-gray-600 dark:text-gray-600 text-sm flex items-center gap-2">
          Designed with <span className="text-red-500">♥</span> and React
        </p>
      </div>
    </footer>
  );
};

export default Footer;